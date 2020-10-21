import { useState, useCallback, useMemo } from 'react'
import type { Contract } from 'web3-eth-contract'
import type { AbiOutput } from 'web3-utils'
import { useMulticallContract } from '../contracts/useMulticallContract'
import { decodeOutputString } from '../helpers'
import { nonFunctionalWeb3 } from '../web3'

//#region useMulticallCallback
interface Call {
    target: string
    callData: string
}

export enum MulticalStateType {
    UNKNOWN,
    /** Wait for tx call */
    PENDING,
    /** Tx call resolved */
    SUCCEED,
    /** Tx call rejected */
    FAILED,
}

export type MulticalState =
    | {
          type: MulticalStateType.UNKNOWN
      }
    | {
          type: MulticalStateType.PENDING
      }
    | {
          type: MulticalStateType.SUCCEED
          results: string[]
      }
    | {
          type: MulticalStateType.FAILED
          error: Error
      }

/**
 * The basic hook for fetching data from Multicall contract
 * @param calls
 */
export function useMulticallCallback(calls: Call[]) {
    const multicallContract = useMulticallContract()
    const [multicallState, setMulticallState] = useState<MulticalState>({
        type: MulticalStateType.UNKNOWN,
    })
    const multicallCallback = useCallback(async () => {
        if (calls.length === 0 || !multicallContract) {
            setMulticallState({
                type: MulticalStateType.UNKNOWN,
            })
            return
        }
        try {
            setMulticallState({
                type: MulticalStateType.PENDING,
            })

            const { blockNumber, returnData } = await multicallContract.methods.aggregate(calls).call()

            setMulticallState({
                type: MulticalStateType.SUCCEED,
                results: returnData,
            })
        } catch (error) {
            setMulticallState({
                type: MulticalStateType.FAILED,
                error,
            })
        }
    }, [calls, multicallContract])
    return [multicallState, multicallCallback] as const
}
//#endregion

export function useMutlicallStateDecoded<T extends Contract, K extends keyof T['methods'], R extends T['methods'][K]>(
    contracts: T[],
    name: string,
    state: MulticalState,
) {
    return useMemo(() => {
        if (state.type !== MulticalStateType.SUCCEED) return []
        return state.results.map((result, i) => {
            const outputs =
                contracts[i].options.jsonInterface.find((x) => x.type === 'function' && x.name === name)?.outputs ??
                ([] as AbiOutput[])
            return decodeOutputString(nonFunctionalWeb3, outputs, result) as R
        })
    }, [contracts, name, state])
}

export function useSingleContractMultipleData<T extends Contract, M extends keyof T['methods']>(
    contract: T | null,
    name: string,
    callDatas: Parameters<T['methods'][M]>[],
) {
    const calls = useMemo(() => {
        if (!contract) return []
        return callDatas.map((data) => ({
            target: contract.options.address,
            callData: contract.methods[name](...data).encodeABI() as string,
        }))
    }, [contract, name, callDatas])
    const [state, callback] = useMulticallCallback(calls)
    const state_ = useMutlicallStateDecoded(new Array(calls.length).fill(contract), name, state)
    return [state_, state, callback] as const
}

export function useMutlipleContractSingleData<T extends Contract, M extends keyof T['methods']>(
    contracts: T[],
    name: string,
    callData: Parameters<T['methods'][M]>,
) {
    const calls = useMemo(
        () =>
            contracts.map((contract) => ({
                target: contract.options.address,
                callData: contracts[0].methods[name](callData).encodeABI() as string,
            })),
        [contracts, name, callData],
    )
    const [state, callback] = useMulticallCallback(calls)
    const state_ = useMutlicallStateDecoded(contracts, name, state)
    return [state_, state, callback] as const
}

export function useMultipleContractMultipleData<T extends Contract, M extends keyof T['methods']>(
    contracts: T[],
    name: string,
    callDatas: Parameters<T['methods'][M]>,
) {
    const calls = useMemo(
        () =>
            contracts.map((contract, idx) => ({
                target: contract.options.address,
                callData: contracts[0].methods[name](callDatas[idx]).encodeABI() as string,
            })),
        [contracts, name, callDatas],
    )
    const [state, callback] = useMulticallCallback(calls)
    const state_ = useMutlicallStateDecoded(contracts, name, state)
    return [state_, state, callback] as const
}

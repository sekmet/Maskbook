import React from 'react'
import { Box, Button } from '@material-ui/core'
import { useERC20TokenContract } from '../contracts/useERC20TokenContract'
import { useSingleContractMultipleData } from '../hooks/useMulticall'

export interface MulticallProps {}

export function Multicall(props: MulticallProps) {
    const contract = useERC20TokenContract('0x960B816d6dD03eD514c03F56788279154348Ea37')
    const [
        decoded,
        singleContractMutlipleDataState,
        singleContractMutlipleDataCallback,
    ] = useSingleContractMultipleData(contract, 'balanceOf', [
        ['0x66b57885E8E9D84742faBda0cE6E3496055b012d'],
        ['0x9A8Cc40a9a61fD97f8E9aF232F4CE642B1d3F82D'],
        ['0x959FD7Ef9089B7142B6B908Dc3A8af7Aa8ff0FA1'],
        ['0xE01352B4857a6314E453916a836A70c25a46bA28'],
    ])

    console.log('DEBUG: multicall')
    console.log({
        decoded,
        contract,
        singleContractMutlipleDataState,
    })

    return (
        <Box display="flex" flexDirection="column">
            <Button onClick={singleContractMutlipleDataCallback}>Single Contract Multiple Data</Button>
        </Box>
    )
}

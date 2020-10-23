import React from 'react'
import { TransactionDialog } from '../../web3/UI/TransactionDialog'
import type { PluginConfig } from '../plugin'
import { PLUGIN_IDENTIFIER } from './constants'
import { SelectProviderDialog } from './UI/SelectProviderDialog'
import { SelectWalletDialog } from './UI/SelectWalletDialog'
import { WalletConnectQRCodeDialog } from './UI/WalletConnectQRCodeDialog'

export const WalletPluginDefine: PluginConfig = {
    pluginName: 'Wallet',
    identifier: PLUGIN_IDENTIFIER,
    pageInspector() {
        return (
            <>
                <TransactionDialog />
                <SelectWalletDialog />
                <SelectProviderDialog />
                <WalletConnectQRCodeDialog />
            </>
        )
    },
    dashboardInspector() {
        return (
            <>
                <TransactionDialog />
                <SelectWalletDialog />
                <SelectProviderDialog />
                <WalletConnectQRCodeDialog />
            </>
        )
    },
}

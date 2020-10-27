import React from 'react'
import type { PluginConfig } from '../plugin'
import { Election2020PluginID } from './constants'
import { Election2020MetadataReader } from './helpers'
import { ElectionPacketsInspector } from './UI/ElectionPacketsInspector'

export const Election2020PluginDefine: PluginConfig = {
    pluginName: 'Election 2020',
    identifier: Election2020PluginID,
    successDecryptionInspector: function Comp(props) {
        if (!Election2020MetadataReader(props.message.meta).ok) return null
        return <ElectionPacketsInspector {...props} />
    }
}
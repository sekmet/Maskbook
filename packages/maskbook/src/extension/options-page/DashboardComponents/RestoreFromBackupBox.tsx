import { useState, useRef, useEffect } from 'react'
import { useDropArea } from 'react-use'
import { useStylesExtends } from '../../../components/custom-ui-helper'
import { makeStyles, createStyles } from '@material-ui/core'
import { RestoreBox } from './RestoreBox'
import { useI18N } from '../../../utils/i18n-next-ui'

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            border: `solid 1px ${theme.palette.divider}`,
            height: 176,
            borderRadius: 4,
        },
        file: {
            display: 'none',
        },
    }),
)

export interface RestoreFromBackupBoxProps extends withClasses<never> {
    file: File | null
    onChange?: (file: File, content: string) => void
}

export function RestoreFromBackupBox(props: RestoreFromBackupBoxProps) {
    const { t } = useI18N()
    const classes = useStylesExtends(useStyles(), props)

    const inputRef = useRef<HTMLInputElement>(null)
    const [file, setFile] = useState<File | null>(props.file)
    const [bound, { over }] = useDropArea({
        onFiles(files) {
            setFile(files[0])
        },
    })

    // invoke callback
    useEffect(() => {
        if (file) {
            const fr = new FileReader()
            fr.readAsText(file)
            fr.addEventListener('loadend', () => props.onChange?.(file, fr.result as string))
        }
    }, [file, props.onChange])

    return (
        <div className={classes.root} {...bound}>
            <input
                className={classes.file}
                type="file"
                accept="application/json"
                ref={inputRef}
                onChange={({ currentTarget }: React.ChangeEvent<HTMLInputElement>) => {
                    if (currentTarget.files) setFile(currentTarget.files.item(0))
                }}
                data-testid="file_input"
            />
            <RestoreBox
                file={file}
                entered={over}
                enterText={t('restore_database_dragging')}
                leaveText={t('restore_database_dragged')}
                darkPlaceholderImageURL={new URL('./RestoreFromBackupBox-dark.png', import.meta.url).toString()}
                lightPlaceholderImageURL={new URL('./RestoreFromBackupBox-light.png', import.meta.url).toString()}
                data-active={over}
                onClick={() => inputRef.current && inputRef.current.click()}
            />
        </div>
    )
}

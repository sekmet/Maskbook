import React from 'react'
import Tilt from 'react-tilt'
import { Card, CardActions, CardContent, createStyles, makeStyles, Typography } from '@material-ui/core'
import { US_PARTY_TYPE, US_STATE_TYPE } from '../types'

const useStyles = makeStyles((theme) =>
    createStyles({
        tilt: {
            width: 120,
            height: 168,
            margin: theme.spacing(1),
        },
        root: {
            width: 120,
            height: 168,
            borderRadius: 4,
            backgroundImage: ({ partyType }: ElectionCardProps) =>
                partyType === US_PARTY_TYPE.BLUE
                    ? 'linear-gradient(180deg, #74B4FF 6.11%, #0947E5 83.63%)'
                    : 'linear-gradient(180deg, #D81A1A 6.11%, #E50909 83.63%)',
        },
        content: {},
        actions: {},
    }),
)

export interface ElectionCardProps {
    stateId: US_STATE_TYPE
    tokenId: number
    partyType: US_PARTY_TYPE
}

export function ElectionCard(props: ElectionCardProps) {
    const classes = useStyles(props)

    return (
        <Tilt className={classes.tilt} options={{ scale: 1.01, max: 20, glare: true, 'max-glare': 2, speed: 2000 }}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography>{props.partyType === US_PARTY_TYPE.BLUE ? 'BIDEN' : 'TRUMP'}</Typography>
                </CardContent>
                <CardActions></CardActions>
            </Card>
        </Tilt>
    )
}

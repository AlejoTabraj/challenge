import React from 'react';
import {Card, CardHeader, CardContent, Typography} from '@material-ui/core';
import useStyles from './style';

export const Details = ({ title }) => {
    const classes = useStyles()

    return (
        <Card className={classes.income}>
            <CardHeader title={title}> </CardHeader>
            <CardContent>
                <Typography variant='h5'>520</Typography>
            </CardContent>
        </Card>
        )
}

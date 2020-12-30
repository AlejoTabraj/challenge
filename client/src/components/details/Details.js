import React from 'react';
import {Card, CardHeader, CardContent, Typography} from '@material-ui/core';
import useStyles from './style';
import { Doughnut } from 'react-chartjs-2';
import useTransactions from '../../useHooks/useTransactions.js'

export const Details = ({ title }) => {
    const classes = useStyles()
    const { total, chartData } = useTransactions(title);
    console.log('ol', chartData)

    return (
        <Card className={title == 'Ingresos' ? classes.income : classes.expense}>
            <CardHeader title={title}> </CardHeader>
            <CardContent>
                <Typography variant='h5'>${total}</Typography>
                <Doughnut data={chartData}/>
            </CardContent>
        </Card>
        )
}

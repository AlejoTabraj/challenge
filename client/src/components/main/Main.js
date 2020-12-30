import React, { useContext } from 'react';
import useStyles from './mainStyle';
import { Card, CardHeader, CardContent, Typography, Divider, Grid } from '@material-ui/core';
import { Form } from './form/Form';
import { List } from './list/List';
import { ExpenseTrackerContext } from '../../../context/context';

const Main = () => {
    const classes = useStyles()
    const { balance } = useContext(ExpenseTrackerContext);
    return (
        <Card className={classes.root}>
            <CardHeader title='Gastos tracker' subheader='Balance de gastos'> </CardHeader>
            <CardContent>
                <Typography align='center' variant='h5'>Balance total</Typography>

                <Typography variant='subtitle1' style={{lineHeight: '1.5em', marginTop: '20px'}}>{balance} pesos</Typography>
                <Divider/>
                <Form/>
            </CardContent>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List/>
                    </Grid>
                </Grid>
            </CardContent>

        </Card>
        
    )
}

export default Main;
import React, { useState, useContext } from 'react';
import { TextField, MenuItem, Typography, Grid, Button, FormControl, InputLabel, Select, MeniItem } from '@material-ui/core';
import useStyle from './formStyle';
import { v4 as uuidv4 } from 'uuid';
import { incomeCategories, expenseCategories } from '../../categories/Categories'
import { ExpenseTrackerContext } from '../../../../context/context.js'

const initialState = {
    amount: '',
    category: '',
    type: 'Ingresos',
    date: new Date()
}

export const Form = () => {
    console.log(ExpenseTrackerContext);
    const classes = useStyle();
    const [formData, setFormData] = useState(initialState);
    const { addTransaction } = useContext(ExpenseTrackerContext)

    console.log(formData)
    const createTransaction = () =>{
        const transaction = [{ ...formData, amount: Number(formData.amount), id: uuidv4()}]
        addTransaction(transaction);
    }

    const selectedCategories = formData.type === 'Ingresos'? incomeCategories: expenseCategories;

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography align='center' variant='subtitle2' gutterBottom>
                    Agrega tus Ingresos y Gastos
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Tipo</InputLabel>
                    <Select value={formData.type} onChange={ e => setFormData({...formData, type: e.target.value})}>
                        <MenuItem value='Ingresos'>Ingresos</MenuItem>
                        <MenuItem value='Gastos'>Gastos</MenuItem>
                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel>Categoria</InputLabel>
                    <Select value={formData.category} onChange={ e => setFormData({...formData, category: e.target.value})}>
                        {
                            selectedCategories.map( cate => <MenuItem key={cate.type} value={cate.type}>{cate.type}</MenuItem>)
                        }
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField type='number' label='Monto' fullWidth value={formData.amount} onChange={ e => setFormData({...formData, amount: e.target.value})}></TextField>
                
            </Grid>

            <Grid item xs={6}>
                <TextField type='date' label='Fecha' fullWidth value={formData.date} onChange={ e => setFormData({...formData, date: e.target.value})}></TextField>
                
            </Grid>
            <Button className={classes.button} variant='outlined' color='primary' fullWidth onClick={createTransaction}>Create</Button>

        </Grid>

    )
}

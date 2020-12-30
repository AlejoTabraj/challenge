import React, { useReducer, createContext} from 'react';
import { contextReducer } from './contextReducer';

const initialState = [];


export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    
    const [transactions, dispatch] = useReducer(contextReducer, initialState);


    const deleteTransaction = (id) => dispatch({type: 'DELETE_TRANSACTION', payload: id});
    const addTransaction = (transaction) => dispatch({type: 'ADD_TRANSACTION', payload: transaction});
    
    console.log('nono', transactions)

    const balance = transactions.reduce((acc, curVal) =>  (curVal[0].type == 'Gastos'?  acc - curVal[0].amount : acc + curVal[0].amount), 0)
    console.log('blssss', balance)
    return (
        <ExpenseTrackerContext.Provider value={{
            deleteTransaction,
            addTransaction,
            transactions,
            balance
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}
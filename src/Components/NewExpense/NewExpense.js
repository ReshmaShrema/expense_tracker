import React, { useState } from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import './NewExpense.css'
const NewExpense =(props)=>{
    const[isHide,setIsHide]=useState(false)
    const saveExpenseDataHandler=(enteredDate)=>{
        const expenseData={
            ...enteredDate,
            id:Math.random.toString()
        }
        props.onAddExpense(expenseData)
        setIsHide(false);
    }
    const startEditFormHandler=()=>{
        setIsHide(true)
    }
    const stopEditHandler=()=>{
        setIsHide(false)
    }
    return (
        <div className="new-expense">
            {!isHide&&<button onClick={startEditFormHandler}>Add New Expense</button>}
            {isHide&&<ExpenseForm onSaveExpense={saveExpenseDataHandler} onChange={stopEditHandler} />}
        </div>
    );
}
export default NewExpense;

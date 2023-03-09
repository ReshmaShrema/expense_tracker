import React from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import './NewExpense.css'
const NewExpense =(props)=>{
    const saveExpenseDataHandler=(enteredDate)=>{
        const expenseData={
            ...enteredDate,
            id:Math.random.toString()
        }
        props.onAddExpense(expenseData)
    }
    return( 
    <div className="new-expense">
        <ExpenseForm onSaveExpense={saveExpenseDataHandler}/>
    </div>
    )
}
export default NewExpense;

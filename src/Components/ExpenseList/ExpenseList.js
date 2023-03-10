import './ExpenseList.css';
import React from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
const ExpenseList =(props)=>{
    if(props.expenseItem.length===0){
       return <h1 className='expenses-list__fallback'>No Item Found</h1>
    }
    return (
        <ul className="expenses-list">
            {props.expenseItem.map((expense) => (
                <ExpenseItem
                    title={expense.title}
                    date={expense.date}
                    amount={expense.amount}
                    key={expense.id}
                />
            ))}
        </ul>
    );
}
export default ExpenseList;
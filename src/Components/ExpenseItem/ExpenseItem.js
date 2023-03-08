import ExpenseDate from '../Date/ExpenseDate';
import React, { useState } from 'react';
import Card from '../UI/Card/Card';
import './ExpenseItem.css';
const ExpenseItem=(props)=> {
    
    const clickHandler=()=>{
        console.log('Clicked');
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
                <button onClick={clickHandler}>Change Title</button>
                <button onClick={()=>{console.log('cliked!!!')}}>Change </button>
            </div>
        </Card>
    );
}
export default ExpenseItem;

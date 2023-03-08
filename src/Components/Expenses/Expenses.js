import React from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import Card from '../UI/Card/Card';
import './Expenses.css';
const Expenses = (props) => {
    return (
        <Card className="expenses">
            {props.expenses.map((expense) => (
                <ExpenseItem
                    title={expense.title}
                    date={expense.date}
                    amount={expense.amount}
                    id={expense.id}
                />
            ))}
        </Card>
    );
}
export default Expenses;

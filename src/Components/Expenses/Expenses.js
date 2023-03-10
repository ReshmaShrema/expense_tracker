import React, { useState } from 'react';
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';
import ExpenseList from '../ExpenseList/ExpenseList';
import Card from '../UI/Card/Card';
import './Expenses.css';
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectYear) => {
        const year = selectYear;
        setFilteredYear(year);
    };
    const filteredExpense = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    
    return (
        <li>
            <Card className="expenses">
                <ExpensesFilter
                    onFilter={filterChangeHandler}
                    selected={filteredYear}
                />
                <ExpenseList expenseItem={filteredExpense}/>
            </Card>
        </li>
    );
};
export default Expenses;

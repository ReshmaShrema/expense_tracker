import React, { useState } from 'react';
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import Card from '../UI/Card/Card';
import './Expenses.css'
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler=(selectYear)=>{
        const year =selectYear;

       setFilteredYear(year);
    }
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onFilter={filterChangeHandler} selected={filteredYear}/>
                {props.expenses.map((expense) => (
                    <ExpenseItem
                        title={expense.title}
                        date={expense.date}
                        amount={expense.amount}
                        key={expense.id}
                    />
                ))}
            </Card>
        </div>
    );
}
export default Expenses;

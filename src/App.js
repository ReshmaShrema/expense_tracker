import React, { useState } from 'react';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpenses/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: 'e2',
        title: 'New TV',
        amount: 799.49,
        date: new Date(2021, 2, 12),
    },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];
const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    //return(React.createElement('div',{},createElement(Expenses,{expenses:expenses})))
    //trigger whenever new expense is added
    const addExpenseHandler = (expense) => {
        setExpenses((preState) => {
            return [expense, ...preState];
        });
        console.log(expenses);
    };
    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses expenses={expenses} />
        </div>
    );
};

export default App;

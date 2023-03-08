import React,{useState} from 'react';
import './ExpenseForm.css';
const ExpenseForm = () => {
    const[enteredTitle,setEnteredTitle]=useState('');
    const[enteredDate,setEnteredDate]=useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const titleChangeHandler=(e)=>{
        setEnteredTitle(e.target.value)
        console.log(e.target.value);
    }
    const dateChangeHandler=(e)=>{
        setEnteredDate(e.target.value)
        console.log(e.target.value);
    }
    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
        console.log(e.target.value);
    };
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        onChange={titleChangeHandler}
                        value={enteredTitle}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        onChange={amountChangeHandler}
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={enteredAmount}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="20222-12-31"
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};
export default ExpenseForm;

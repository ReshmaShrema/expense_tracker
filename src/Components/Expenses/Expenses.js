import ExpenseItem from "../ExpenseItem/ExpenseItem";
import './Expenses.css'
function Expenses(props){
    return (
        <div className="expenses">
            {props.expenses.map((expense) => (
                <ExpenseItem
                    title={expense.title}
                    date={expense.date}
                    amount={expense.amount}
                    id={expense.id}
                />
            ))}
        </div>
    );
}
export default Expenses;
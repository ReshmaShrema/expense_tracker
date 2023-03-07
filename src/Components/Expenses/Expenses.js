import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../Card/Card";
import './Expenses.css'
function Expenses(props){
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
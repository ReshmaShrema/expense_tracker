import './ExpenseItem.css';
function ExpenseItem(props){
    const expenses= {
        date:new Date(2021,12,12),
        amount:6574.34,
        title:'Toilet Paper'
    }
    console.log('props item',props)
    return (
        <div className="expense-item">
            <div>{expenses.date.toISOString}</div>
            <div className="expense-item__description">
                <h2>{expenses.title}</h2>
                <div className="expense-item__price">${expenses.amount}</div>
            </div>
        </div>
    );
        
    
}
export default ExpenseItem;
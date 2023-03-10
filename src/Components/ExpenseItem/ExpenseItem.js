import ExpenseDate from '../ExpenseDate/ExpenseDate';
import React from 'react';
import Card from '../UI/Card/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    // const [title,setTitle] = useState(props.title);
    // console.log('how many time this will executed?')
    // const clickHandler=()=>{
    //     setTitle('Updated!!!')
    //     console.log('Clicked');
    // }
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                    {/* <button onClick={clickHandler}>Change Title</button> */}
                </div>
            </Card>
        </li>
    );
};
export default ExpenseItem;

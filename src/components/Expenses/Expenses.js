import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter';
import {useState} from 'react';

const Expenses = (props) => {

  const [filterYear, setFilterYear] = useState('2020');

  const filterHandler = (filteredYear) => {
    setFilterYear(filteredYear);
    console.log(filteredYear);
  };

  return (
    <div>

      <Card className="expenses">
        <ExpensesFilter selected={filterYear} onFilterYearChange={filterHandler}/>
        <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}></ExpenseItem>
        <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}></ExpenseItem>
        <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}></ExpenseItem>
        <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}></ExpenseItem>
      </Card>
    </div>
  );
}

export default Expenses;

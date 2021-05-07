import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter';
import {useState} from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

  const [filterYear, setFilterYear] = useState('2020');

  const filterHandler = (filteredYear) => {
    setFilterYear(filteredYear);
  };

  const filterResult = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filterYear} onFilterYearChange={filterHandler}/>
        <ExpensesChart expenses={filterResult}/>
        <ExpensesList item={filterResult}/>
      </Card>
    </div>
  );
}

export default Expenses;

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import {useState} from 'react';

const dummyExpenses = [
  {
    id: 'e1',
    title: "Health Insurance",
    amount: 300,
    date: new Date(2020, 11, 20)
  },
  {
    id: 'e2',
    title: "Internet bill",
    amount: 99,
    date: new Date(2021, 1, 2)
  },
  {
    id: 'e3',
    title: "Grocery Expenses",
    amount: 150,
    date: new Date(2021, 2, 20)
  },
  {
    id: 'e4',
    title: "Car Insurance",
    amount: 200,
    date: new Date(2021, 4, 5)
  },
];
const App = () => {

  const [expenses, setExpense] = useState(dummyExpenses);

  const addExpenseHandler = (expense) => {
    setExpense((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;

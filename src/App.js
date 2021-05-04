import ExpenseItem from './components/ExpenseItem';

function App() {

  const expenses = [
    {
      title: "Health Insurance",
      amount: 300,
      date: new Date(2020, 11, 20)
    },
    {
      title: "Internet bill",
      amount: 99,
      date: new Date(2021, 1, 2)
    },
    {
      title: "Grocery Expenses",
      amount: 150,
      date: new Date(2021, 2, 20)
    },
    {
      title: "Car Insurance",
      amount: 200,
      date: new Date(2021, 4, 5)
    }
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>
    </div>
  );
}

export default App;

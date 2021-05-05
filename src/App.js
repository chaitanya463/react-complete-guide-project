import Expenses from './components/Expenses'

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
      <Expenses items={expenses}> </Expenses>
    </div>
  );
}

export default App;

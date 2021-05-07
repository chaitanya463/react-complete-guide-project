import './NewExpense.css';
import ExpenseForm from './ExpenseForm'
import {useState} from 'react';

const NewExpense = (props) => {
  const [editingForm, setEditingForm] = useState(false);

  const startEditingFormHandler = () => {
    setEditingForm(true);
  }

  const stopEditingFormHandler = () => {
    setEditingForm(false);
  }
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
    setEditingForm(false);
  };

  return (
    <div className="new-expense">
      {!editingForm && <button onClick={startEditingFormHandler}> AddExpense </button>}
      {editingForm && <ExpenseForm onSaveExpenseDate={saveExpenseDataHandler} onCancel={stopEditingFormHandler}/>}
    </div>
  );
};

export default NewExpense;

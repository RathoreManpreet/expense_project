import './App.css';
import Expenses from './components/Expense/Expenses';
import React from 'react';

function App() {
  const expenses = [
    {
      date: new Date(2021, 7, 8),
      title: 'Car Insurance',
      price: 2000,
    },
    {
      date: new Date(2021, 6, 13),
      title: 'Home Insurance',
      price: 2000,
    },
    {
      date: new Date(2021, 2, 8),
      title: 'Education Insurance',
      price: 2000,
    },

  ];
  // return React.createElement(
  //   'div',
  //   { className: 'App' },
  //   React.createElement(Expenses, { items: expenses })
  // )
  return (
    <div className="App">
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

import React from 'react';
import '../App.css';


const IncomeExpenses = ({ transactions }) => {
  const amounts = transactions.map(transaction => transaction.amount);
  const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
  const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">RM{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">RM{expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;

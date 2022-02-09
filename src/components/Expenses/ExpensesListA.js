import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesListA.css";
import "./EmptyWallet.png";
const ExpensesListA = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="outer-container">
        <img
          className="oops-img"
          src={require("./EmptyWallet.png")}
          alt="Oops!"
        />
        <h2 className="expenses-list__fallback">Oops! No expenses found.</h2>
      </div>
    );
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesListA;

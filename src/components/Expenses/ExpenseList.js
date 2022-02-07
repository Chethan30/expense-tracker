import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesListA from "./ExpensesListA";
import ExpensesChart from "./ExpensesChart";
import "./ExpenseList.css";
import Card from "../UI/Card";
function ExpenseList(props) {
  const [fillteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    // console.log("In Expense List");
    // console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  const expenses = props.exp; //array of items

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === fillteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={fillteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesListA items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default ExpenseList;

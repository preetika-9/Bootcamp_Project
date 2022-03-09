import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { listIncomeAction, listExpenseAction } from "./action";

const ListPage = () => {
  const dispatch = useDispatch();
  const income = useSelector((state) => state.incomeList);
  const expense = useSelector((state) => state.expenseList);
  console.log(income);
  // useEffect(() => {
  //   dispatch(listAction())
  // }, [])
  //const { isError, isFetching, response } = income;
  return (
    <>
      <div className="header">
        <h1 className="Header-title">Income Data</h1>
      </div>
      <div className="data-section">
        <div className="container">
          <button onClick={() => dispatch(listIncomeAction())}>Get Data</button>
        </div>
      </div>
      <tbody>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
        {Array.isArray(income?.response?.incomes) &&
        income?.response?.incomes.length ? (
          income?.response?.incomes.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.amount}</td>
              <td>{item.date}</td>
            </tr>
          ))
        ) : (
          <h1>Empty</h1>
        )}
      </tbody>

      <div className="header">
        <h1 className="Header-title">Expense Data</h1>
      </div>
      <div className="data-section">
        <div className="container">
          <button onClick={() => dispatch(listExpenseAction())}>
            Get Data
          </button>
        </div>
      </div>

      <tbody>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
        {Array.isArray(expense?.response?.expenses) &&
        expense?.response?.expenses.length ? (
          expense?.response?.expenses.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.amount}</td>
              <td>{item.date}</td>
            </tr>
          ))
        ) : (
          <h1>Empty</h1>
        )}
      </tbody>
    </>
  );
};

export default ListPage;

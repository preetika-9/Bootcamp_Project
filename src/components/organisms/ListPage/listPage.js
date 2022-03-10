import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { listIncomeAction, listExpenseAction } from "./action";
import { removeIncome } from "./action";
import { Button, Table } from "react-bootstrap";

const ListPage = () => {
  const dispatch = useDispatch();
  const income = useSelector((state) => state.incomeList);
  const expense = useSelector((state) => state.expenseList);
  console.log(income);
  useEffect(() => {
    dispatch(listIncomeAction());
  }, []);
  //const { isError, isFetching, response } = income;

  const onDelete = (id) => {
    dispatch(removeIncome(id));
  };
  const navigate = useNavigate();
  const onAdd = () => {
    navigate("/income");
  };
  console.log(income?.response?.incomes, "listpage");
  return (
    <>
      <div className="header">
        <h1 className="Header-title">Income Data</h1>
        <Button variant="primary" onClick={onAdd}>
          Add Income
        </Button>
      </div>
      {/* <div className="data-section">
        <div className="container">
          <button onClick={() => dispatch(listIncomeAction())}>Get Data</button>
        </div>
      </div> */}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(income?.response?.incomes) &&
          income?.response?.incomes.length > 0 ? (
            income?.response?.incomes.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.amount}</td>
                <td>{item.date}</td>
                <td>
                  <Button variant="danger" onClick={() => onDelete(item.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <h1>Empty</h1>
          )}
        </tbody>
      </Table>

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
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(expense?.response?.expenses) &&
          expense?.response?.expenses.length ? (
            expense?.response?.expenses.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.amount}</td>
                <td>{item.date}</td>
                <td>
                  <Button variant="danger" onClick={onDelete}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <h1>Empty</h1>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default ListPage;

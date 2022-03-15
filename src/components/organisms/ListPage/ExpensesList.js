import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { listExpenseAction } from "./action";
import { removeIncome } from "./action";
import { Button, Table } from "react-bootstrap";

const ExpensesList = () => {
  const dispatch = useDispatch();

  const expense = useSelector((state) => state.expenseList);

  useEffect(() => {
    dispatch(listExpenseAction());
  }, []);
  //const { isError, isFetching, response } = income;

  const onDelete = (id) => {
    dispatch(removeIncome(id));
  };
  const navigate = useNavigate();
  const onAdd = () => {
    navigate("/expenses");
  };

  const toIncome = () => {
    navigate("/listpage");
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <>
      <div className="header">
        <h1 className="Header-title">Expense Data</h1>
        <Button variant="primary" onClick={onAdd}>
          Add Expenses
        </Button>
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
                  <Button variant="primary"> Edit</Button>{" "}
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

      <div className="expenses-list-btn">
        <Button variant="danger" onClick={toIncome}>
          Go To Income List
        </Button>
      </div>

      <Button variant="primary" onClick={logout}>
        LogOut
      </Button>
    </>
  );
};

export default ExpensesList;

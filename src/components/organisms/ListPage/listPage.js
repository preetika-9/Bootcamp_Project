import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { listIncomeAction } from "./action";
import { removeIncome } from "./action";
import { Button, Table } from "react-bootstrap";
import moment from "moment";
import { FaEdit, FaTrash } from "react-icons/fa";
import { IconContext } from "react-icons";

const ListPage = () => {
  const dispatch = useDispatch();
  const income = useSelector((state) => state.incomeList);
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

  const toExpenses = () => {
    navigate("/listexpenses");
  };
  const onEdit = (item) => {
    // console.log(item);
    navigate(`/income/${item.id}`);
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <>
      <div className="header">
        <h1 className="Header-title">Income Data</h1>
        <div className="add-income-btn">
          <Button variant="primary" onClick={onAdd}>
            Add Income
          </Button>
        </div>
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
                <td>{moment(item.date).format("DD/MM/YYYY")}</td>

                <td>
                  <Button variant="primary" onClick={() => onEdit(item)}>
                    <FaEdit /> Edit
                  </Button>{" "}
                  <Button variant="danger" onClick={() => onDelete(item.id)}>
                    <IconContext.Provider
                      value={{ color: "white", className: "global-class-name" }}
                    >
                      <FaTrash />
                    </IconContext.Provider>
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
        <Button variant="danger" onClick={toExpenses}>
          Go To Expenses List
        </Button>
      </div>
      <div className="logout-btn">
        <Button
          variant="primary"
          onClick={logout}
          className="log-out-btn"
          size="lg"
        >
          LogOut
        </Button>
      </div>
    </>
  );
};

export default ListPage;

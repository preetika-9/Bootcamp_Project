import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { removeExpense, listExpenseAction } from "./action";
import { Button, Table } from "react-bootstrap";
import moment from "moment";

import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ExpenseList = () => {
  const dispatch = useDispatch();

  const expense = useSelector((state) => state.expenseList);

  useEffect(() => {
    dispatch(listExpenseAction());
  }, []);
  //const { isError, isFetching, response } = income;

  const onDelete = async (id) => {
    const response = await dispatch(removeExpense(id));
    console.log(response);
    closeModal();
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

  const onEdit = (item) => {
    navigate(`/expenses/${item.id}`);
  };

  const onFilter = () => {
    navigate("/monthfilter");
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="header">
        <h1 className="Header-title">Expense Data</h1>
        <div className="add-income-btn">
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h1>Are you sure you want to delete?</h1>
            <Button onClick={onDelete}>Yes</Button>
            <Button onClick={closeModal}>No</Button>
          </Modal>
          <Button variant="primary" onClick={onAdd}>
            Add Expenses
          </Button>

          <Button variant="primary" onClick={onFilter}>
            Filter Month
          </Button>
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
                <td>{moment(item.date).format("DD/MM/YYYY")}</td>
                <td>
                  <Button variant="primary" onClick={() => onEdit(item)}>
                    {" "}
                    Edit
                  </Button>{" "}
                  <Button variant="danger" onClick={openModal}>
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

export default ExpenseList;

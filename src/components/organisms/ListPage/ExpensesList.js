import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { removeExpense, listExpenseAction } from "./action";
import { Button, Table } from "react-bootstrap";
import moment from "moment";

import Modal from "react-modal";

import { FaEdit, FaTrash } from "react-icons/fa";
import { IconContext } from "react-icons";

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
    //dispatch(removeExpense(id));
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

  const [selectedId, setSelectedId] = React.useState();

  return (
    <>
      <div className="container">
        <div className="header p-3">
          <h1 className="Header-title">Expense Data</h1>
          <div className="add-expense-btn">
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <h1>Are you sure you want to delete?</h1>
              {/* <Button onClick={() => onDelete(selectedId)}>Yes</Button>
              <Button onClick={closeModal}>No</Button> */}

              <div className="footer-listpage col-12">
                <div className="expenses-list-btn col-12 col-lg-6 col-md-6 col-sm-12  d-flex justify-content-center">
                  <Button
                    variant="danger"
                    className=" btn-lg"
                    onClick={() => onDelete(selectedId)}
                  >
                    Yes
                  </Button>
                </div>
                <div className="logout-btn col-12 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center">
                  <Button
                    variant="primary"
                    onClick={closeModal}
                    className="log-out-btn "
                    size="lg"
                  >
                    No
                  </Button>
                </div>
              </div>
            </Modal>
            <Button
              variant="primary"
              className=" btn-lg button-add"
              onClick={onAdd}
            >
              Add Expenses
            </Button>

            <Button
              variant="primary"
              className=" btn-lg button-filter"
              onClick={onFilter}
            >
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
                    <div className="d-flex  col-12">
                      <div className="col-3">
                        <Button
                          variant="primary btn-lg"
                          onClick={() => onEdit(item)}
                        >
                          {" "}
                          <FaEdit className="icon" /> Edit
                        </Button>{" "}
                      </div>
                      <div className="col-3">
                        <Button
                          variant="danger btn-lg"
                          onClick={() => {
                            setSelectedId(item.id);
                            openModal();
                          }}
                        >
                          <IconContext.Provider
                            value={{
                              color: "white",
                              className: "global-class-name",
                            }}
                          >
                            <FaTrash />
                          </IconContext.Provider>
                          Delete
                        </Button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <h1>Empty</h1>
            )}
          </tbody>
        </Table>

        <div className="footer-listpage col-12">
          <div className="expenses-list-btn col-12 col-lg-6 col-md-6 col-sm-12  d-flex justify-content-start">
            <Button variant="danger" className=" btn-lg" onClick={toIncome}>
              Go To Income List
            </Button>
          </div>
          <div className="logout-btn col-12 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-end">
            <Button
              variant="primary"
              onClick={logout}
              className="log-out-btn "
              size="lg"
            >
              LogOut
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpenseList;

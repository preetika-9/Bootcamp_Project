import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { listIncomeAction } from "./action";
import { removeIncome } from "./action";
import { Button, Table } from "react-bootstrap";
import moment from "moment";
import { FaEdit, FaTrash } from "react-icons/fa";
import { IconContext } from "react-icons";

import "reactjs-popup/dist/index.css";

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

const ListPage = () => {
  const dispatch = useDispatch();
  const income = useSelector((state) => state.incomeList);
  useEffect(() => {
    dispatch(listIncomeAction());
  }, []);
  //const { isError, isFetching, response } = income;

  const onDelete = async (id) => {
    const response = await dispatch(removeIncome(id));
    console.log(response);
    // dispatch(removeIncome(id));
    closeModal();
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
  const filterDate = () => {
    navigate("/filterdate");
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
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
          <h1 className="Header-title ">Income Data</h1>
          <div className="add-income-btn">
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <h1>Are you sure you want to delete?</h1>
              <Button onClick={() => onDelete(selectedId)}>Yes</Button>
              <Button onClick={closeModal}>No</Button>
            </Modal>
            <Button
              variant="primary"
              className=" btn-lg button-add"
              onClick={onAdd}
            >
              Add Income
            </Button>
            <Button
              variant="primary"
              className=" btn-lg button-filter"
              onClick={filterDate}
            >
              Filter Date
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
                    <div className="d-flex  col-12">
                      <div className="col-3">
                        <Button
                          variant="primary btn-lg"
                          onClick={() => onEdit(item)}
                        >
                          <FaEdit /> Edit
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
                              size: "1.2em",
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
              <h1 className="text-center">Empty</h1>
            )}
          </tbody>
        </Table>

        <div className="footer-listpage col-12 ">
          <div className="expenses-list-btn col-12 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-start">
            <Button variant="danger" className=" btn-lg " onClick={toExpenses}>
              Go To Expenses List
            </Button>
          </div>
          <div className="logout-btn col-12 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-end">
            <Button
              variant="primary"
              onClick={logout}
              className="log-out-btn btn-lg "
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

export default ListPage;

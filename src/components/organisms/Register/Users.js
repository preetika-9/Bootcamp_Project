import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Table } from "react-bootstrap";
import moment from "moment";
import { FaEdit, FaTrash } from "react-icons/fa";
import { IconContext } from "react-icons";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { registerAction, removeUser } from "./action";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Users = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.register);
  console.log(user);

  useEffect(() => {
    dispatch(registerAction());
  }, []);

  const [modalIsOpen, setIsOpen] = React.useState(false);
  // function openModal() {
  //   setIsOpen(true);
  // }

  function closeModal() {
    setIsOpen(false);
  }

  const navigate = useNavigate();

  const onDelete = async (id) => {
    const response = await dispatch(removeUser(id));
    console.log(response);
    closeModal();
  };

  const onEdit = (item) => {
    navigate(`/user/${item.id}`);
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const [selectedId, setSelectedId] = React.useState();

  return (
    <>
      <div className="container">
        <div className="header p-3">
          <h1 className="Header-title ">Users List</h1>
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

              <div className="modal-box col-12">
                <div className="modal-confirm-btn col-12 col-lg-6 col-md-6 col-sm-12  d-flex justify-content-center">
                  <Button
                    variant="danger"
                    className=" btn-lg"
                    // onClick={() => onDelete(selectedId)}
                  >
                    Yes
                  </Button>
                </div>
                <div className="modal-close-btn col-12 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center">
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
          </div>
        </div>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Date of Birth</th>
              <th>Profile Picture</th>
            </tr>
          </thead>

          <tbody>
            {Array.isArray(user?.response?.users) &&
            user?.response?.users.length > 0 ? (
              user?.response?.users.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.address}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>

                  <td>{moment(item.date_of_birth).format("DD/MM/YYYY")}</td>
                  {item.profile_picture == null ? (
                    <td>
                      {" "}
                      <p>No Image</p>{" "}
                    </td>
                  ) : (
                    <td>
                      <img
                        alt=""
                        src={"http://localhost:3005/" + item.profile_picture}
                        width="100"
                        height="100"
                        className="user-image"
                      />
                    </td>
                  )}

                  <td>
                    <div className="d-flex  col-12">
                      <div className="col-6">
                        <Button
                          variant="primary btn-lg"
                          onClick={() => onEdit(item)}
                        >
                          <FaEdit /> Edit
                        </Button>{" "}
                      </div>
                      <div className="col-6">
                        <Button
                          variant="danger btn-lg"
                          onClick={() => {
                            setSelectedId();
                            // openModal();
                          }}
                        >
                          <IconContext.Provider
                            value={{
                              color: "blue",
                              className: "color-blue",
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
          {/* <tbody>
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
                              color: "blue",
                              className: "color-blue",
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
          </tbody> */}
        </Table>

        <div className="footer-listpage col-12 ">
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

export default Users;

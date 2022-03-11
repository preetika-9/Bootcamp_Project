import axios from "axios";

export const createExpense = (payload) => {
  const url = "http://localhost:3005/api/expense";
  const token = localStorage.getItem("token");
  console.log(token, "hello");
  return axios
    .post(
      url,
      {
        ...payload,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => res.data);
};

export const deleteExpense = (id) => {
  const token = localStorage.getItem("token");
  const url = `http://localhost:3005/api/expense/${id}`;
  return axios
    .delete(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);
};

import axios from "axios";

export const createIncome = (payload) => {
  const url = "http://localhost:3005/api/income";
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

export const deleteIncome = (id) => {
  const token = localStorage.getItem("token");
  const url = `http://localhost:3005/api/income/${id}`;
  return axios
    .delete(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);
};

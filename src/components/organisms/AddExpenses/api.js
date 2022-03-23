import axios from "../../../utils/axios";

export const createExpense = (payload) => {
  const url = "/api/expense";

  return axios
    .post(url, {
      ...payload,
    })
    .then((res) => res.data);
};

export const getExpenseById = (id) => {
  const url = `/api/expense/${id}`;

  return axios.get(url).then((res) => res.data);
};

export const UpdateExpense = (id, payload) => {
  const url = `/api/expense/${id}`;

  // return axios.put(url, payload).then((res) => res.data);

  return axios.put(url, payload);
};

export const deleteExpense = (id) => {
  console.log(id);
  const url = `/api/expense/${id}`;

  return axios.delete(url).then((res) => res.data);
};

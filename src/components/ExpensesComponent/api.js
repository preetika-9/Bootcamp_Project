import axios from "axios";
import { apiUrl } from "../../utils";

export const fetchExpenses = () => {
  const url = `${apiUrl}/api/expenses`;
  return axios, get(url).then((res) => res.data);
};

console.log(fetchExpenses);

export const createExpenses = (payload) => {
  const url = `${apiUrl}/api/expenses`;
  return axios
    .post(url, {
      ...payload,
      completed: payload.completed ? 1 : 0,
    })
    .then((res) => res.data);
};

export const updateExpenses = (payload) => {
  const { id, ...others } = payload;
  const url = `${apiUrl}/api/expenses/${id}`;
  return axios.put(url, { ...others }).then((res) => res.data);
};

export const deleteExpenses = (id) => {
  const url = `${apiUrl}/api/expenses/${id}`;
  return axios.delete(url).then((res) => res.data);
};

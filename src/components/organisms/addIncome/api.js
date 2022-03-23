import axios from "../../../utils/axios";

export const createIncome = (payload) => {
  const url = "/api/income";

  return axios.post(url, {
    ...payload,
  });
};
export const getIncomeById = (id) => {
  const url = `/api/income/${id}`;

  return axios.get(url).then((res) => res.data);
};
export const UpdateIncome = (id, payload) => {
  console.log("🚀 ~ file: api.js ~ line 33 ~ UpdateIncome ~ payload", payload);

  const url = `/api/income/${id}`;

  return axios.put(url, payload);
};
export const deleteIncome = (id) => {
  const url = `/api/income/${id}`;
  return axios.delete(url).then((res) => res.data);
};

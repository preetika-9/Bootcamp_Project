import axios from "axios";

export const createIncome = (payload) => {
  const url = "http://localhost:3005/api/income";
  return axios
    .post(url, {
      ...payload,
    })
    .then((res) => res.data);
};

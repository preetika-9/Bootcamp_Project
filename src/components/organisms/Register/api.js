import axios from "../../../utils/axios";

export const createUser = (payload) => {
  const url = "/api/users";

  return axios.post(url, {
    ...payload,
  });
};

export const getUserById = (id) => {
  const url = `/api/users/${id}`;
  return axios.get(url).then((res) => res.data);
};

export const UpdateUser = (id, payload) => {
  const url = `/api/users/${id}`;
  return axios.put(url, payload);
};

export const deleteUser = (id) => {
  const url = `/api/users${id}`;
  return axios.delete(url).then((res) => res.data);
};

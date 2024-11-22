import axios from "axios";

const baseUrl = "https://reqres.in/";

export const getUsers = () => {
  return axios.get(`${baseUrl}api/users?page`).then((response) => response.data);
};

export const deleteUser = (id) => {
  return axios.delete(`${baseUrl}api/users/${id}`).then(() => id);
};

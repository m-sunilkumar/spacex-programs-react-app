import axios from "axios";

export const api = (id) => axios.get(`https://reqres.in/api/users/${id}`);
export default {
  api,
};

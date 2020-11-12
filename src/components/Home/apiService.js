import api from "../../services/apiServices";

const getAllPrograms = () => api.get(`/launches?limit=100`);

const getFilteredPrograms = (query) => api.get(`/launches`, null, query);

export default {
  getAllPrograms,
  getFilteredPrograms,
};

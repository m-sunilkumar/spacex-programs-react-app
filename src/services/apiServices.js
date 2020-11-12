import axios from "axios";
import config from "../config";

function ApiCall(url, method, data, header, params) {
  const headers = {
    ...header,
    "content-type": "application/json",
    // "Access-Control-Allow-Origin": "*",
  };
  return axios.request({ url, method, headers, data, params });
}

const api = {
  get(path, payload, params, header) {
    const url = config.url + path;
    return ApiCall(url, "GET", payload, header, params);
  },
};

export default api;

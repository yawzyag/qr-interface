import axios from "axios";
import { isAuth, getToken } from "../auth";

const baseUrl = process.env.REACT_APP_BASE_URL;

const getHeaders = () => {
  let headers = {};
  if (isAuth()) {
    headers = { headers: { Authorization: `${getToken()}` } };
  }
  return headers;
};
const get = async (path) => {
  const headers = getHeaders();
  let resolveReturn, rejectReturn;
  const promise = new Promise((resolve, reject) => {
    resolveReturn = resolve;
    rejectReturn = reject;
  });

  try {
    const resp = await axios.get(`${baseUrl}${path}`, headers);
    resolveReturn(resp);
  } catch (error) {
    rejectReturn(error);
  }

  return promise;
};

const post = (path, params) => {
  let headers = getHeaders();
  return axios.post(`${baseUrl}${path}`, params, headers);
};

export { post, get };

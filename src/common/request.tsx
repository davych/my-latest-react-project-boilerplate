import axios from 'axios';

const request = axios.create({
  baseURL: process.env.REACT_APP_BASE_API,
  timeout: 10000,
});

export default request;

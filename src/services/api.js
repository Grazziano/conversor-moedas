import axios from 'axios';

const url = 'https://economia.awesomeapi.com.br/json/';

const api = axios.create({
  baseURL: url,
});

export default api;

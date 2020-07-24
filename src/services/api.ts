import axios from 'axios';

const api = axios.create({
  baseURL: 'http://3.19.221.38:3030',//'http://localhost:3333',
});

export default api;

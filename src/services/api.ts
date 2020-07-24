import axios from 'axios';

const api = axios.create({
  baseURL: 'http://3.21.227.135:3333',//'http://localhost:3333',
});

export default api;

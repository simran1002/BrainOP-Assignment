import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Update the base URL to point to port 5000
});

export default api;

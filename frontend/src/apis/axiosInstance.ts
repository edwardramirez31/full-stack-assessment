import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://example.com',
});

export default axiosInstance;
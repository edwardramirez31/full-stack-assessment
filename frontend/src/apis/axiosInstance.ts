import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://strapi-faq.herokuapp.com/api',
});

export default axiosInstance;

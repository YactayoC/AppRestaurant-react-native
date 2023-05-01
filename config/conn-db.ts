import axios from 'axios';

const RestaurantAPI = axios.create({
  baseURL: 'http://192.168.1.11:3000/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default RestaurantAPI;

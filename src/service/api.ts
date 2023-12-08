import axios from 'axios';

export const api = axios.create({
  baseURL: "https://aos-backend-deploy.onrender.com",
});
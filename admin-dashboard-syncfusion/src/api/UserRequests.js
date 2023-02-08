import axios from "axios"

const API = axios.create({ baseURL: "https://neublock-backend.onrender.com"});

export const getAllUsers = () => API.get('/users')
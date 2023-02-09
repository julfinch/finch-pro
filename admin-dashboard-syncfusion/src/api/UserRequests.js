import axios from "axios"

const neublockAPI = axios.create({ baseURL: "https://neublock-backend.onrender.com"});
const finchteaAPI = axios.create({ baseURL: "https://finch-tea.vercel.app/api"});

export const getAllUsers = () => neublockAPI.get('/users')

export const getAllOrders = () => finchteaAPI.get('/orders')
export const getAllProducts = () => finchteaAPI.get('/products')

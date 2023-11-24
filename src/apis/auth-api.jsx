import axios from '../config/axios'

export const getMe = () => axios.get("/auth/me")
export const signup = (input) => axios.post('/auth/signup', input)
export const login = (input) => axios.post('/auth/login', input)
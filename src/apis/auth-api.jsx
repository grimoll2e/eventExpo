import axios from '../config/axios'

export const signup = (input) => axios.post('/auth/signup', input)
import axios from '../config/axios'

// export const getProfileUser = (username) => axios.get('/accountsetting/' + username) // คิดว่าไม่ได้ใช้
export const updateUser = (input) => axios.patch('/accountsetting/', input)

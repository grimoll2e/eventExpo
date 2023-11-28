import axios from '../config/axios'

export const createHall = (input) => axios.post('/veanuesetting/create', input)
export const getall = () => axios.get('/veanuespeace/',)
export const updateHall = (input, hallid) => axios.patch(`/veanuesetting/${hallid}`, input)
export const deleteHall = (hallid) => axios.delete(`/veanuesetting/${hallid}`)
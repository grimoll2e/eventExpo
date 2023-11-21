import axios from '../config/axios'

export const createHall = (input) => axios.post('/veanuespeace/create', input)
export const getall = () => axios.get('/veanuespeace/',)
export const updateHall = (input, hallid) => axios.patch(`/veanuespeace/${hallid}`, input)
export const deleteHall = (hallid) => axios.delete(`/veanuespeace/${hallid}`)
import axios from '../config/axios'

export const create = (input) => axios.post('/booth/create', input)
export const edit = (input, boothId) => axios.patch(`/booth/edit/${boothId}`, input)
export const deleteBooth = (boothId) => axios.delete(`/booth/delete/${boothId}`)
export const getByUserId = () => axios.get('/booth/')
import axios from '../config/axios'

export const createEvent = (input) => axios.post('/event/create', input)
export const getall = () => axios.get('/event/',)
export const getById = (eventId) => axios.get(`/event/${eventId}`,)
export const updateEvent = (input, eventId) => axios.patch(`/event/${eventId}`, input)
export const deleteEvnt = (eventId) => axios.delete(`/event/${eventId}`)
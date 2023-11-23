import axios from '../config/axios'

export const createEvent = (input) => axios.post('/event/create', input)
export const getall = () => axios.get('/event/',)
export const getOtherId = (eventId) => axios.get(`event/other/${eventId}`)
export const getById = (eventId) => axios.get(`/event/${eventId}`,)
export const updateEvent = (input, eventId) => axios.patch(`/event/${eventId}`, input)
export const deleteEvnt = (eventId) => axios.delete(`/event/${eventId}`)

export const createEventDetail = (input, eventId) => axios.post(`/event/detail/create/${eventId}`, input)
export const editEventDetail = (input, eventDetailId) => axios.patch(`/event/detail/${eventDetailId}`, input)
export const deleteEventDetail = (eventDetailId) => axios.delete(`/event/detail/${eventDetailId}`)
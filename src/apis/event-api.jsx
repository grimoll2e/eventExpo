import axios from '../config/axios'

export const createEvent = (input) => axios.post('/eventsetting/create', input)
export const getall = () => axios.get('/event/',)
export const getOtherId = (eventId) => axios.get(`event/other/${eventId}`)
export const getById = (eventId) => axios.get(`/event/${eventId}`)
export const updateEvent = (input, eventId) => axios.patch(`/eventsetting/${eventId}`, input)
export const deleteEvnt = (eventId) => axios.delete(`/eventsetting/${eventId}`)

export const createEventDetail = (input, eventId) => axios.post(`/eventsetting/detail/create/${eventId}`, input)
export const editEventDetail = (input, eventDetailId) => axios.patch(`/eventsetting/detail/${eventDetailId}`, input)
export const deleteEventDetail = (eventDetailId) => axios.delete(`/eventsetting/detail/${eventDetailId}`)

export const createEventZone = (input, eventId) => axios.post(`/eventsetting/eventzone/create/${eventId}`, input)
export const editEventZone = (input, eventzoneId) => axios.patch(`/eventsetting/eventzone/editeventzone/${eventzoneId}`, input)
export const deleteEventZone = (eventzoneId) => axios.delete(`/eventsetting/eventzone/deleteeventzone/${eventzoneId}`)
export const getEventZoneByEventId = (eventId) => axios.get(`/event/eventzone/${eventId}`)
export const getEventZonebyuserId = (eventId, userId) => axios.get(`/event/eventzone/${eventId}/${userId}`)
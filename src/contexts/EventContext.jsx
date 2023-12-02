import { useState, useEffect, createContext } from 'react'

import * as eventApi from '../apis/event-api'

export const EventContext = createContext()

export default function EventContextProvider({ children }) {
    const [allEvent, setAllEvent] = useState([])
    const [eventById, setEventById] = useState(null)
    const [eventOtherId, setEventOtherId] = useState(null)
    const [eventZoneById, setEvetZoneById] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const allevent = await eventApi.getall()
            setAllEvent(allevent.data.result)
        }
        fetchData()
    }, [])

    const getEventById = async (id) => {
        try {
            if (!id) {
                setEventById(null)
                // return { gotopath: '/event' }
            } else {
                const res = await eventApi.getById(id)
                setEventById(res.data.result)
            }
        } catch (error) {
            setEventById(null)
            return { error }
        }
    }

    const getEventOtherId = async (id) => {
        try {
            if (!id) {
                setEventOtherId(null)
            } else {
                const res = await eventApi.getOtherId(id)
                setEventOtherId(res.data.result)
            }
        } catch (error) {
            setEventOtherId(null)
        }
    }

    const handleCreateEvent = async (input, file) => {
        const formData = new FormData()
        if (file) {
            formData.append('image', file)
        }
        Object.entries(input).forEach(([key, value]) => {
            formData.append(key, value);
        });
        const res = await eventApi.createEvent(formData)
        setAllEvent((prv) => [res.data.post, ...prv])
    }

    const handleDeleteEvent = async (id) => {
        await eventApi.deleteEvnt(id)
        setAllEvent((prv) => prv.filter(el => el.id !== id))
    }

    const handleEditEvent = async (input, id, file) => {
        const formData = new FormData()
        if (file) {
            formData.append('image', file)
        }
        Object.entries(input).forEach(([key, value]) => {
            formData.append(key, value);
        });
        const res = await eventApi.updateEvent(formData, id)
        setAllEvent(prv => prv.map(el => el.id === id ? { ...el, ...res.data.result } : el))
    }
    //eventDetail
    const handleCreateEventDetail = async (input, bigImage, image, id) => {
        let formData = new FormData()

        if (bigImage) {
            formData.append('bigImage', bigImage)
        }
        if (image) {
            formData.append('image', image)
        }
        Object.entries(input).forEach(([key, value]) => {
            formData.append(key, value);
        })
        const res = await eventApi.createEventDetail(formData, id)
        setEventById((prv) => ({ ...prv, EventDetails: [...prv.EventDetails, res.data.post] }))
    }

    const handleEditEventDetail = async (input, bigImage, image, eventDetailId) => {
        try {
            if (!eventDetailId) {
                return console.error('need eventDetailId')
            } else {
                let formData = new FormData()
                if (bigImage) {
                    formData.append('bigImage', bigImage)
                }
                if (image) {
                    formData.append('image', image)
                }
                Object.entries(input).forEach(([key, value]) => {
                    formData.append(key, value);
                })
                const res = await eventApi.editEventDetail(formData, eventDetailId)
                setEventById((prv) => ({ ...prv, EventDetails: prv.EventDetails.map((el) => el.id === eventDetailId ? { ...el, ...res.data.result } : el) }));
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleDeleteEventDetail = async (eventDetailId) => {
        if (!eventDetailId) {
            return console.error('need eventDetailId')
        }
        await eventApi.deleteEventDetail(eventDetailId)
        setEventById((prv) => ({ prv, EventDetails: prv.EventDetails.filter(el => el.id !== eventDetailId) }))
    }
    //eventZone
    const getAllEventZoneByEventId = async (id) => {
        try {
            if (!id) {
                setEvetZoneById(null)
            } else {
                const res = await eventApi.getEventZoneByEventId(id)
                setEvetZoneById(res.data.result)
            }
        } catch (error) {

        }
    }
    return (
        <EventContext.Provider value={{ allEvent, eventById, eventOtherId, eventZoneById, setEvetZoneById, getEventById, getEventOtherId, handleCreateEvent, handleDeleteEvent, handleEditEvent, handleCreateEventDetail, handleEditEventDetail, handleDeleteEventDetail, getAllEventZoneByEventId }}>
            {children}
        </EventContext.Provider>
    )
}
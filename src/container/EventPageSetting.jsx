import { useEffect, useState } from 'react'

import * as eventApi from '../apis/event-api'

import EventPageForm from '../features/auth/EventPageForm'
import ListItem from '../components/ListItem'
import Button from '../components/Button'

export default function EventPageSetting() {

    const [values, setValues] = useState([])
    const [EventId, setEventId] = useState(null)
    const [valueById, setValueById] = useState(null)
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
            const res = await eventApi.getall()
            setValues(res.data.result)
                if (EventId === '0') {
                    setEventId(null)
                    setValueById([])
                } else if (EventId) {
                    const resById = await eventApi.getById(EventId)
                    setValueById(resById.data.result.EventDetails ? resById.data.result.EventDetails : null)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()

    }, [EventId])

    const handleSubmit = async (input, bigImage, image, id) => {
        let formData = new FormData()

        if (bigImage) {
            formData.append('bigImage', bigImage)
        }
        if (image) {
            formData.append('image', image)
        }
        Object.entries(input).forEach(([key, value]) => {
            formData.append(key, value);
            // console.log('key: ' + key + ' value : ' + value)
        })
        // console.log(formData)
        const res = await eventApi.createEventDetail(formData, id)
        setValueById((prv) => [...prv, res.data.post])
        setToggle(false)
    }

    const handleEdit = async (input, bigImage, image, eventDetailId) => {
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
                // console.log('key: ' + key + ' value : ' + value)
            })
            const res = await eventApi.editEventDetail(formData, eventDetailId)
            setValueById((prv) => prv.map(el => el.id === eventDetailId ? { ...el, ...res.data.result } : el))
        }
    }

    const handleDelete = async (eventDetailId) => {
        if (!eventDetailId) {
            return console.error('need eventDetailId')
        }
        await eventApi.deleteEventDetail(eventDetailId)
        setValueById(prv => prv.filter(el => el.id !== eventDetailId))
    }

    return (
        <>
            <select className="form-select" aria-label="Default select example" onChange={(e) => setEventId(e.target.value)}>
                <option value={0}>Open this select Event</option>
                {values && values.map((el, idx) => (
                    <option key={idx} value={el.id}>{el.title}</option>
                ))}
            </select>
            {!toggle ?
                (EventId && <div className='d-flex justify-content-center mt-3'>
                    <Button text={'Add EventDetail'} onClick={() => setToggle(true)} />
                </div>)
                : <EventPageForm
                    EventId={EventId}
                    handleSubmit={handleSubmit}
                />
            }
            {valueById && valueById.map((el, idx) => (
                <ListItem
                    name={el.title}
                    detail={el.detail}
                    idx={idx}
                    key={idx}
                    src={el.bigImage}
                    id={el.id}
                    handleDelete={handleDelete}
                >
                    <EventPageForm
                        id={el.id}
                        key={idx}
                        name={el.name}
                        bigSrc={el.bigImage}
                        src={el.image}
                        title={el.title}
                        detail={el.detail}
                        handleEdit={handleEdit}
                    />
                </ListItem>
            ))}
        </>
    )
}

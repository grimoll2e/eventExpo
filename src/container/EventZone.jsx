import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import * as eventApi from '../apis/event-api'
import ListItem from '../components/ListItem'

export default function EventZone() {
    const [values, setValues] = useState([])
    const [EventId, setEventId] = useState(null)
    const [valueById, setValueById] = useState(null)
    // const [toggle, setToggle] = useState(false)

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
    return (
        <>
            <div>EventZone</div>
            <select className="form-select" aria-label="Default select example" onChange={(e) => setEventId(e.target.value)}>
                <option value={0}>Open this select Event</option>
                {values && values.map((el, idx) => (
                    <option key={idx} value={el.id}>{el.title}</option>
                ))}
            </select>
            {/* {valueById && valueById.map((el, idx) => (
                <ListItem
                    name={el.title}
                    detail={el.detail}
                    idx={idx}
                    key={idx}
                    src={el.bigImage}
                    id={el.id}
                // handleDelete={handleDelete}
                >
                </ListItem>
            ))} */}
        </>
    )
}

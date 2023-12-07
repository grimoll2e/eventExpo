import { useEffect, useState } from 'react'

import ListItem from '../../components/ListItem'
import Button from '../../components/Button'
import EventPageForm from './EventPageForm'

import useEvent from '../../hooks/useEvent'

export default function EventPageSetting() {

    const { allEvent, getEventById, eventById, handleDeleteEventDetail } = useEvent()

    const [eventId, setEventId] = useState(null)
    const [toggle, setToggle] = useState(false)

    useEffect(() => {

        const fetchData = async () => {
            if (eventId === '0' || eventId === null) {
                await getEventById(null)
                setEventId(null)
            } else if (eventId) {
                await getEventById(eventId)
            }
        }
        fetchData()
        setToggle(false)

    }, [eventId])

    return (
        <>
            <select className="form-select" aria-label="Default select example" onChange={(e) => setEventId(e.target.value)}>
                <option value={0}>Open this select Event</option>
                {allEvent && allEvent.map((el, idx) => (
                    <option key={idx} value={el.id}>{el.title}</option>
                ))}
            </select>
            {!toggle ?
                (eventId && <div className='d-flex justify-content-center mt-3'>
                    <Button text={'Add EventDetail'} onClick={() => setToggle(true)} />
                </div>)
                : <EventPageForm
                    EventId={eventId}
                    setToggle={setToggle}
                />
            }
            {eventById ? eventById.EventDetails.map((el, idx) => (
                <ListItem
                    name={el.title}
                    detail={el.detail}
                    idx={idx}
                    key={idx}
                    src={el.bigImage}
                    id={el.id}
                    handleDelete={handleDeleteEventDetail}
                >
                    <EventPageForm
                        id={el.id}
                        key={idx}
                        name={el.name}
                        bigSrc={el.bigImage}
                        src={el.image}
                        title={el.title}
                        detail={el.detail}
                    />
                </ListItem>
            )) : <></>}
        </>
    )
}

import { useEffect, useState } from 'react'

import ListItem from '../../components/ListItem'
import Button from '../../components/Button'
import EventPageForm from './EventPageForm'

import useEvent from '../../hooks/useEvent'

export default function EventPageSetting() {

    const { allEvent, getEventById, eventById, handleDeleteEventDetail, handleCreateEventDetail, handleEditEventDetail } = useEvent()

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


    const onSubmitForm = async (values, image, id, bigImage) => {
        if (!id) {
            const updateValues = { ...values, eventId: eventId }
            await handleCreateEventDetail(updateValues, image, eventId, bigImage)
        } else {
            await handleEditEventDetail(values, image, id, bigImage)
        }
    }

    return (
        <>

            <select className="form-select" aria-label="Default select example" onChange={(e) => setEventId(e.target.value)}>
                <option value={0}>Open this select Event</option>
                {allEvent && allEvent.map((el, idx) => (
                    <option key={idx} value={el.id}>{el.title}</option>
                ))}
            </select>


            {toggle ?
                <EventPageForm toggleForCreate={() => setToggle(false)} onSubmitForm={onSubmitForm} eventId={eventId} /> :
                (eventId && <div className='d-flex justify-content-center mt-3'>
                    <Button text={'Add EventDetail'} onClick={() => setToggle(true)} />
                </div>)
            }

            {
                eventById && eventById.EventDetails.map((el, idx) => (
                    <ListItem
                        name={el.title}
                        detail={el.detail}
                        src={el.bigImage}
                        id={el.id}
                        idx={idx}
                        key={idx}
                        handleDelete={handleDeleteEventDetail}
                    >
                        <EventPageForm
                            onSubmitForm={onSubmitForm}
                            id={el.id}
                            title={el.title}
                            detail={el.detail}
                            // period={el.period}
                            hallId={el.hallId}
                            src={el.bigImage}
                            smallSrc={el.image}
                        />
                    </ListItem>))
            }

        </>
    )
}

{/* <select className="form-select" aria-label="Default select example" onChange={(e) => setEventId(e.target.value)}>
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
)) : <></>} */}
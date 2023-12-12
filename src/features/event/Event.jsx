import { useState, useEffect } from 'react'

import ListItem from '../../components/ListItem'
import Image from '../../components/Image'
import EventForm from './EventForm'

import useEvent from '../../hooks/useEvent'
import useAuth from '../../hooks/useAuth'

const valueOpacity = '0.6'

export default function Event() {

    const { authenticatedUser } = useAuth()
    const { handleEditEventZone, getAllEventZoneByEventId, getEventById, eventZoneById, allEvent, eventById, getEventZonebyuserId, eventZoneByuserId } = useEvent()
    const [eventId, setEventId] = useState(null)

    useEffect(() => {
        const fetchdata = () => {
            getAllEventZoneByEventId(eventId)
            getEventById(eventId)
            getEventZonebyuserId(eventId, authenticatedUser.id)
        }
        fetchdata()
    }, [eventId])

    const onSubmitForm = async (values) => {
        await handleEditEventZone({ boothId: values.boothId }, values.zoneId)
    }

    return (
        <>
            <select className="form-select" aria-label="Default select example" onChange={(e) => setEventId(e.target.value)}>
                <option value={0}>Open this select Event</option>
                {allEvent && allEvent.map((el, idx) => (
                    <option key={idx} value={el.id}>{el.title}</option>
                ))}
            </select>
            {eventId ?
                <div className='my-3 position-relative' >
                    <Image
                        src={eventById ? eventById.Hall.image : null}
                        size={'100%'}
                    />
                    {eventZoneById && eventZoneById.map((el, idx) => (
                        <div className='position-absolute d-flex justify-content-center align-items-center rounded'
                            key={idx}
                            style={{
                                top: `${el.yaixs}%`,
                                left: `${el.xaixs}%`,
                                width: `${el.width}%`,
                                height: `${el.height}%`,
                                backgroundImage: el.Booth ? `url(${el.Booth.image})` : null,
                                backgroundSize: el.Booth ? "cover" : null,
                                backgroundColor: el.color,
                                opacity: el.Booth ? '1' : valueOpacity,
                            }}>
                            <h1 className='m-0' style={{ userSelect: 'none' }}>
                                {el.title}
                            </h1>
                        </div>
                    )
                    )}
                </div>
                : null}

            {
                eventZoneByuserId && eventZoneByuserId.map((el, idx) => (
                    <ListItem
                        name={el.Booth ? el.Booth.title : el.title}
                        detail={el.Booth ? el.Booth.description : null}
                        src={el.Booth ? el.Booth.image : null}
                        id={el.id}
                        idx={idx}
                        key={idx}
                        noButton={true}
                    >
                        <EventForm
                            onSubmitForm={onSubmitForm}
                            id={el.id}
                            zoneId={el.id}
                            boothId={el.boothId ? el.boothId : 0}
                            src={el.image}
                        />
                    </ListItem>))
            }

        </>
    )
}
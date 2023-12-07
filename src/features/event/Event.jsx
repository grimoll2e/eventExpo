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

    const handleSubmit = async (input) => {
        await handleEditEventZone({ boothId: input.boothId }, input.zoneId)
    }

    useEffect(() => {
        const fetchdata = () => {
            getAllEventZoneByEventId(eventId)
            getEventById(eventId)
            getEventZonebyuserId(eventId, authenticatedUser.id)
        }
        fetchdata()
    }, [eventId])
    // console.log(eventZoneByuserId)


    return (
        <div>
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
                                // cursor: 'move',
                            }}>
                            <h1 className='m-0' style={{ userSelect: 'none' }}>
                                {el.title}
                            </h1>
                        </div>
                    )
                    )}
                </div>
                : null}
            {eventZoneByuserId ? eventZoneByuserId.map((el, idx) => (
                <ListItem
                    noButton={true}
                    key={idx}
                    idx={idx}
                    id={el.id}
                    name={el.Booth ? el.Booth.title : el.title}
                    src={el.Booth ? el.Booth.image : null}
                    detail={el.Booth ? el.Booth.description : null}
                >
                    <EventForm
                        zoneId={el.id}
                        boothId={el.boothId ? el.boothId : 0}
                        handleSubmit={handleSubmit}
                    />
                </ListItem>
            )) : null
            }
        </div>
    )
}

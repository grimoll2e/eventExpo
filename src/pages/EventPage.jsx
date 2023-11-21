import CardandDetail from "../components/CardandDetail";
import Card from '../components/Card'
import { useState } from "react";
import { useEffect } from "react";
import * as eventApi from '../apis/event-api'
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const showlimit = 4

export default function EventPage() {
    const { eventId } = useParams();
    const [mainEvent, setMainEvent] = useState({})
    const [value, setValue] = useState([])
    const navigate = useNavigate();


    useEffect(() => {
        const getById = async () => {
            const res = await eventApi.getById(eventId)
            setMainEvent(res.data.result)
            if (res.data.result === null) {
                navigate('/event')
            }
        }
        if (eventId) {
            getById()
        }
        const getallhall = async () => {
            const res = await eventApi.getall()
            setValue(res.data.result)
        }
        getallhall()

    }, [eventId])

    return (
        <div className="container mb-5 d-flex flex-column gap-5">
            <div>
                <img className="map_img" src={eventId ? mainEvent.image : "https://images.unsplash.com/photo-1545987796-200677ee1011?"} alt="" />
            </div>
            <div>
                <h1 className="header_text">{eventId ? mainEvent.title : 'Event'}</h1>
            </div>
            <div>
                <p className="header_text">{eventId ? mainEvent.description : 'Event'}</p>
            </div>
            <div>
                {value.slice(0, showlimit).map((el, idx) => (
                    <CardandDetail title={el.title} description={el.description} src={el.image} idx={idx + 1} key={idx} />
                ))}
            </div>
            <div>
                <h1 className="header_text">Other's Event</h1>
                <Card value={value} />
            </div>
        </div>
    )
}

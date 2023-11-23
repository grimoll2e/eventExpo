import CardandDetail from "../components/CardandDetail";
import Card from '../components/Card'
import { useState } from "react";
import { useEffect } from "react";
import * as eventApi from '../apis/event-api'
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const showlimit = 3

export default function EventPage() {
    const { eventId } = useParams();
    const [mainEvent, setMainEvent] = useState({})
    const [value, setValue] = useState([])
    const navigate = useNavigate();


    useEffect(() => {
        const scrollToTop = () => {
            const currScrollY = window.scrollY
            if (currScrollY > 0) {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        };
        scrollToTop()

        const fetchData = async () => {
            if (eventId) {
                const res = await eventApi.getById(eventId)
                setMainEvent(res.data.result)
                const otherId = await eventApi.getOtherId(eventId)
                setValue(otherId.data.result)
                if (res.data.result === null) {
                    navigate('/event')
                }
            } else {
                const res = await eventApi.getall()
                setValue(res.data.result)
            }
        }
        fetchData()
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
                <p className="header_text">{eventId ? mainEvent.description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}</p>
            </div>
            <div>
                {mainEvent.EventDetails ? mainEvent.EventDetails.map((el, idx) => (
                    <CardandDetail title={el.title} description={el.detail} bigImage={el.bigImage} image={el.image} key={idx} idx={idx} />
                )) :
                    value.slice(0, showlimit).map((el, idx) => (
                        <CardandDetail title={el.title} description={el.description} bigImage={el.image} idx={idx + 1} key={idx} />
                    ))
                } 
            </div>
            <div>
                <h1 className="header_text">Other's Event</h1>
                <Card value={value} />
            </div>
        </div>
    )
}

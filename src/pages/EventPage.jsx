import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import CardandDetail from "../components/CardandDetail";
import Card from '../components/Card'

import useEvent from "../hooks/useEvent";

const showlimit = 3

export default function EventPage() {
    const { allEvent, getEventById, eventById, getEventOtherId, eventOtherId } = useEvent();
    const { eventId } = useParams();
    const navigate = useNavigate() 

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
            try {
                const res = await getEventById(eventId)
                await getEventOtherId(eventId)
                if (res.error) {
                    navigate('/event')
                }
            } catch (error) {
            }
        }
        fetchData()

    }, [eventId])
    return (
        <div className="container mb-5 d-flex flex-column gap-5">
            <div>
                <img className="map_img" src={eventById ? eventById.image : "https://images.unsplash.com/photo-1545987796-200677ee1011?"} alt="" />
            </div>
            <div>
                <h1 className="header_text">{eventById ? eventById.title : 'Event'}</h1>
            </div>
            <div>
                <p className="header_text">{eventById ? eventById.description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}</p>
            </div>
            <div>
                {eventById ? eventById.EventDetails.map((el, idx) => (
                    <CardandDetail title={el.title} description={el.detail} bigImage={el.bigImage} image={el.image} key={idx} idx={idx} />
                )) :
                    allEvent.slice(0, showlimit).map((el, idx) => (
                        <CardandDetail title={el.title} description={el.description} bigImage={el.image} idx={idx + 1} key={idx} />
                    ))
                }
            </div>
            <div>
                <h1 className="header_text">{eventById ? "Other's Event" : "All Event"}</h1>
                <Card value={eventById ? eventOtherId : allEvent} />
            </div>
        </div>
    )
}

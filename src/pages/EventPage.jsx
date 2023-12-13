import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import CardandDetail from "../components/CardandDetail";
import Card from '../components/Card'
import Button from "../components/Button";

import useEvent from "../hooks/useEvent";
import Image from "../components/Image";
import { Link } from "react-router-dom";

const showlimit = 3
const valueOpacity = '0.6'

export default function EventPage() {
    const { allEvent, getEventById, eventById, getEventOtherId, eventOtherId, eventZoneById, getAllEventZoneByEventId } = useEvent();
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
                await getAllEventZoneByEventId(eventId)
                if (res.error) {
                    navigate('/event')
                }
            } catch (error) {
            }
        }
        fetchData()

    }, [eventId])
    // console.log(eventZoneById)
    return (
        <div className="container mb-5 d-flex flex-column gap-5">
            <div>
                <img className="map_img rounded" src={eventById ? eventById.image : "https://images.unsplash.com/photo-1545987796-200677ee1011?"} alt="" />
            </div>
            <div>
                <h1 className="header_text">{eventById ? eventById.title : 'Event'}</h1>
            </div>
            <div>
                <p className="header_text">{eventById ? eventById.description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}</p>
            </div>
            {eventById && <div className='mt-3 position-relative'>
                <Image
                    src={eventById.Hall.image}
                    size={'100%'}
                />
                {eventZoneById && eventZoneById.map((el, idx) => (
                    <div className="eventzone" key={idx}>
                        <div className='position-absolute d-flex justify-content-center align-items-center rounded'
                            style={{
                                top: `${el.yaixs}%`,
                                left: `${el.xaixs}%`,
                                width: `${el.width}%`,
                                height: `${el.height}%`,
                                backgroundColor: el.color,
                                opacity: valueOpacity,
                            }}>
                            <h1 className='m-0' style={{ userSelect: 'none' }}>
                                {el.title}
                            </h1>
                        </div>
                        {/* ต้องแก้จาก hover ไป onclick for responsive */}
                        {/* <div className="h-50 w-50  z-3 gap-3 rounded p-3 d-none d-xl-block hover_eventzone" style={{
                            top: Number(el.yaixs) + Number(el.height) > 80 ? '50%' : `${el.yaixs}%`,
                            left: Number(el.xaixs) + Number(el.width) > 80 ? '50%' : `${el.xaixs}%`,
                        }}>
                            <Image src={el.Booth.image} size={230} />
                            <div className="d-flex flex-column overflow-hidden ">
                                <h4>
                                    {el.Booth.title}
                                </h4>
                                <span className="overflow-hidden mb-0" >{el.Booth.description}</span>
                                <Link to={el.Booth.link} className="text-decoration-none">
                                    read more
                                </Link>
                            </div>
                        </div> */}
                    </div>
                ))}
            </div>}
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
} <>
    <div>
        <div>
        </div>
    </div>
</>
import CardandDetail from "../components/CardandDetail";
import Card from '../components/Card'

export default function EventPage() {
    const event = [
        {}
    ]
    return (
        <div className="container mb-5 d-flex flex-column gap-5">
            <div>
                <img className="map_img" src="https://images.unsplash.com/photo-1545987796-200677ee1011?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fFNlY3VyaXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60" alt="" />
            </div>
            <div>
                <h1 className="header_text">Event name</h1>
            </div>
            <div>
                {event.map((el, idx) => (
                    <CardandDetail el={el} idx={idx + 1} key={idx} />
                ))}
            </div>
            <div>
                <h1 className="header_text">Other's Event</h1>
                <Card />
            </div>
        </div>
    )
}

import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaLine } from "react-icons/fa";
import GoogleMapComponent from "../components/GoogleMapComponent";


const contactdetail = [
    {
        icon: <FaMapMarkerAlt />,
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
    },
    {
        icon: <FaEnvelope />,
        detail: 'EventExpo@whatmail.com'
    },
    {
        icon: <FaPhoneAlt />,
        detail: '+66-0000-0000'
    },
    {
        icon: <FaLine />,
        detail: '@EventExpo'
    },
]

export default function ContactPage() {

    return (
        <div className="container mb-5 d-flex flex-column gap-5">
            <div>
                <img className="map_img" src="https://images.unsplash.com/photo-1545987796-200677ee1011?" alt="" />
            </div>
            <div>
                <h1 className="header_text">Contact  us</h1>
            </div>
            <div className="row">
                <div className="col-12 col-lg-6 mb-3">
                    <h1 className="header_text mb-3">EventExpo Center</h1>
                    {contactdetail && contactdetail.map((el, idx) => (
                        <div className="d-flex align-items-center gap-3 mb-2" key={idx}>
                            <h1>{el.icon}</h1>
                            <p className="m-0">{el.detail}</p>
                        </div>
                    ))}
                </div>
                <div className="col-12 col-lg-6 mb-3">
                    <h1 className="header_text mb-3">Map</h1>
                    {/* <GoogleMapComponent zoom={17} /> */}
                </div>
            </div>
        </div>
    )
}

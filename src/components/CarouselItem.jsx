import { Link } from "react-router-dom";

export default function CarouselItem({ el, idx }) {

    return (
        <div className="mycarousel_item" key={idx}>
            <img className="mycarousel_img" src={el.image} alt="" />
            <Link to={`/event/${el.id}`}>
                <div className="mycarousel_text">
                    <h1>{el.title}</h1>
                    <p className="text-truncate">{el.description}</p>
                </div>
            </Link>
        </div>
    )
}

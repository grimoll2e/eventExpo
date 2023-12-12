import { Link } from "react-router-dom";

export default function CardItem({ el }) {

    const formatISODate = (input) => {
        const date = new Date(input);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // เดือนเริ่มที่ 0, จึงต้องบวก 1

        const formattedDate = `${day}/${month}`; //(DD/MM)

        return formattedDate;
    }

    return (
        <div className="col-12 col-md-6 col-lg-4 mb-3 card_item">
            <div className="card_inner">
                <Link to={`/event/${el.id}`}>
                    <img className="card_img" src={el.image} alt="" />
                    <div className="card_detail text-truncate">
                        <h1>{el.title}</h1>
                        <p className="fs-4">{el.description}</p>
                    </div >
                    <div className="card_date">
                        <span className="align-middle">
                            {formatISODate(el.period) || 'DD-MM'}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

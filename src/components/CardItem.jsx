import { Link } from "react-router-dom";


export default function CardItem({ el, idx }) {

    const formatISODate = (input) => {
        const date = new Date(input);
        const day = date.getDate();
        const month = date.getMonth() + 1; // เดือนเริ่มที่ 0, จึงต้องบวก 1
        const year = date.getFullYear();

        const formattedDate = `${day}/${month}/${year}`; //(DD/MM/YYYY)

        return formattedDate;
    }

    return (
        <div className="col-12 col-md-6 col-lg-4 mb-3 card_item">
            <div className="card_inner">
                <Link to={`/event/${el.id}`}>
                    <img className="card_img" src={el.image} alt="" />
                </Link>
                <div className="card_detail" >
                    <h1>{el.title}</h1>
                    <p className="fs-4">{el.description}</p>
                </div >
                <div className="card_date">
                    {formatISODate(el.period) || '07-09'}
                </div>
            </div>
        </div>
    )
}

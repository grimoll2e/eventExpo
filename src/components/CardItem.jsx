

export default function CardItem({ el, idx }) {
    return (
        <div className="col-12 col-md-6 col-lg-4 mb-3 card_item">
            <div className="card_inner">
                <img className="card_img" src={el.img} alt="" />

                <div className="card_detail" >
                    <h1>{el.title}</h1>
                    <p className="fs-4">{el.description}</p>
                </div >
                <div className="card_date">
                    {el.date || '07-09'}
                </div>
            </div>
        </div>
    )
}

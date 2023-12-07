export default function CarouselItem({ el, idx }) {

    return (
        <div className="mycarousel_item" key={idx}>
            <img className="mycarousel_img" src={el.img} alt="" />
            <div className="mycarousel_text">
                <h1>{el.title}</h1>
                <h1>{el.description}</h1>
            </div>
        </div>
    )
}

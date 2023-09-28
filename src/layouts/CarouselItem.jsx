
export default function CarouselItem({ el, idx, previousImg, nextImg }) {

    return (
        <div className="mycarousel_item" key={idx}>
            <div>
                <span className="arrow-carousel-left" onClick={previousImg}></span>
                <span className="arrow-carousel-right" onClick={nextImg}></span>
            </div>
            <img className="mycarousel_img" src={el.img} alt="" />
            <div className="mycarousel_text">
                <h1>{el.title}</h1>
                <h1>{el.description}</h1>
            </div>
        </div>
    )
}

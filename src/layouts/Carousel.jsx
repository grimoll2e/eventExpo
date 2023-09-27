import { useState } from "react"

export default function Carousel({ carousel }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextImg = () => {
        const currentImg = currentIndex === carousel.length - 1
        const nextIndex = currentImg ? 0 : currentIndex + 1
        setCurrentIndex(nextIndex)
    }
    const previousImg = () => {
        const currentImg = currentIndex === 0
        const nextIndex = currentImg ? carousel.length - 1 : currentIndex - 1
        setCurrentIndex(nextIndex)
    }

    return (
        <div className="container mycarousel p-0">
            <span className="arrow-carousel-left" onClick={nextImg}></span>
            <span className="arrow-carousel-right" onClick={previousImg}></span>
            {carousel.map((el, idx) => (
                <div key={idx}>
                    {
                        idx === currentIndex &&
                        <div>
                            <img src={el.img} alt="" />
                            <div className="overlay">
                                <h1 className="title">{el.title}</h1>
                                <p className="description">{el.description}</p>
                            </div>
                        </div>
                    }
                </div>
            ))}
            <div className="pointer-event">
                {carousel.map((el, idx) => (
                    <div className="pointer_item mx-1" key={el.img} onClick={() => setCurrentIndex(idx)}></div>
                ))}
            </div>
        </div>
    );
}

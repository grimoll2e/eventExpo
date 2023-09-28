import { useEffect, useState, useRef } from "react"
import CarouselItem from "./CarouselItem"
import Carouselpointeritem from "./Carouselpointeritem"


export default function Carousel({ carousel }) {
    const timerRef = useRef(null)
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
    useEffect(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current)
        }
        timerRef.current = setTimeout(() => {
            nextImg();
        }, 3000)
        return () => clearTimeout(clearTimeout(timerRef.current))
    }, [nextImg])

    return (
        <div className="container mycarousel px-0 mb-5">
            <div className="inner"
                style={{ transform: `translate(-${currentIndex * 100}%)` }}>
            {carousel.map((el, idx) => (
                <CarouselItem key={idx} el={el} idx={idx} nextImg={nextImg} previousImg={previousImg} />
            ))}
            </div>
            <div className="arrow container">
                <span className="arrow_carousel_left" onClick={previousImg}></span>
                <span className="arrow_carousel_right" onClick={nextImg}></span>
            </div>
            <div className=" mycarousel_pointer">
                {carousel.map((el, idx) => (
                    <Carouselpointeritem key={idx} el={el} idx={idx} setCurrentIndex={setCurrentIndex}></Carouselpointeritem>

                ))}
            </div>
        </div>
    )
}

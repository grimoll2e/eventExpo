export default function Carouselpointeritem({ el, idx, children, setCurrentIndex }) {
    return (
        <div className="mx-1" key={idx} onClick={() => setCurrentIndex(idx)}>
            <img className='mycarousel_pointer_item' src={el.image} alt="" />
            {children}
        </div>
    )
}

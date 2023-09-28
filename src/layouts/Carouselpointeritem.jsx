import React from 'react'

export default function Carouselpointeritem({ idx, children }) {
    return (
        <div className="mycarousel_pointer_item mx-1" key={idx} onClick={() => setCurrentIndex(idx)}>
            {children}
        </div>
    )
}

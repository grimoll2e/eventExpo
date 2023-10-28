import React from 'react'
import CardRight from './CardRight'

export default function CardandEDetailRight({ el }) {
    return (
        <div className='container'>
            <div className='row justify-content-evenly align-items-center'>
                <div className='order-lg-2 col-md-12 col-lg-5 flex-column justify-content-center gap-4'>
                    <h1 className='header_text'>
                        {el.title || 'title'}
                    </h1>
                    <p className='px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit accusantium eligendi saepe expedita vel voluptatum earum perferendis, debitis distinctio unde, id deserunt enim! Saepe ad tenetur, reiciendis eaque aspernatur ratione.</p>
                </div>
                <div className='text-center order-lg-1 col-md-8 col-lg-5'>
                    <CardRight el={el} />
                </div>
            </div>
        </div>

    )
}

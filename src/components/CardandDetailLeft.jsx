import React from 'react'
import CardLeft from './CardLeft'

export default function CardandDetailLeft({ el }) {
    return (
        <div className='container'>
            <div className='row justify-content-evenly align-items-center'>
                <div className='col-md-12 col-lg-5 flex-column justify-content-center gap-4'>
                    <h1 className='header_text'>
                        {el.title || 'title'}
                    </h1>
                    <p className='px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit accusantium eligendi saepe expedita vel voluptatum earum perferendis, debitis distinctio unde, id deserunt enim! Saepe ad tenetur, reiciendis eaque aspernatur ratione.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit accusantium eligendi saepe expedita vel voluptatum earum perferendis, debitis distinctio unde, id deserunt enim! Saepe ad tenetur, reiciendis eaque aspernatur ratione.</p>
                </div>
                <div className='text-center col-md-8 col-lg-5'>
                    <CardLeft el={el} />
                </div>
            </div>
        </div>
    )
}

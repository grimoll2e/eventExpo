import React from 'react'
import CardLeft from './CardLeft'

export default function CardandDetailLeft({ el }) {
    return (
        <div className='container'>
            <div className='row CL_Item'>
                <div className='col-6 d-flex flex-column  justify-content-center gap-4 CL_Detail'>
                    <h1 className='header_text'>
                        {el.title || 'title'}
                    </h1>
                    <p className='px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit accusantium eligendi saepe expedita vel voluptatum earum perferendis, debitis distinctio unde, id deserunt enim! Saepe ad tenetur, reiciendis eaque aspernatur ratione.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit accusantium eligendi saepe expedita vel voluptatum earum perferendis, debitis distinctio unde, id deserunt enim! Saepe ad tenetur, reiciendis eaque aspernatur ratione.</p>
                </div>
                <div className='col-6 text-center'>
                    <CardLeft el={el} />
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import CardRight from './CardRight'

export default function CardandEDetailRight({ el }) {
    return (
        <div className='container'>
            <div className='row CL_Item mb-5'>
                <div className='col-6 text-center'>
                    <CardRight el={el} />
                </div>
                <div className='col-6 CL_Detail d-flex flex-column align-content-center justify-content-center gap-4 px-5'>
                    <h1 className='header_text'>
                        {el.title}
                    </h1>
                    <p className='px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit accusantium eligendi saepe expedita vel voluptatum earum perferendis, debitis distinctio unde, id deserunt enim! Saepe ad tenetur, reiciendis eaque aspernatur ratione.</p>
                </div>
            </div>
        </div>

    )
}

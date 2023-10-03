import React from 'react'

export default function CardRight({ el }) {
    return (
        <div className='CL_Img p-5'>
            <img className='CL_Img_main' src={el.img_big} alt="" />
            <img className='CL_Img_right' src={el.img_sm} alt="" />
        </div>
    )
}

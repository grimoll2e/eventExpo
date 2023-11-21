import React from 'react'
import CardandDetailLeft from './CardandDetailLeft'
import CardandEDetailRight from './CardandEDetailRight'

export default function CardandDetail({ title, description, src, idx }) {
    return (
        <div className='CardandDetail mb-5'>
            <div className='CardandDetail_list'>
                {idx % 2 === 0 ? <CardandDetailLeft title={title} description={description} src={src} /> : <CardandEDetailRight title={title} description={description} src={src} />}
            </div>
        </div>
    )
}

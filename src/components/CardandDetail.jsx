import React from 'react'
import CardandDetailLeft from './CardandDetailLeft'
import CardandEDetailRight from './CardandEDetailRight'

export default function CardandDetail({ title, decsription, src, idx }) {
    return (
        <div className='CardandDetail mb-5'>
            <div className='CardandDetail_list'>
                {idx % 2 === 0 ? <CardandDetailLeft title={title} decsription={decsription} src={src} /> : <CardandEDetailRight title={title} decsription={decsription} src={src} />}
            </div>
        </div>
    )
}

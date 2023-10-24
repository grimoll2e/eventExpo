import React from 'react'
import CardandDetailLeft from './CardandDetailLeft'
import CardandEDetailRight from './CardandEDetailRight'

export default function CardandDetail({ el, idx }) {
    return (
        <div className='CardandDetail'>
            <div className='CardandDetail_list'>
                {idx % 2 === 0 ? <CardandDetailLeft el={el} /> : <CardandEDetailRight el={el} />}
            </div>
        </div>
    )
}
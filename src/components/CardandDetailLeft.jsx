import React from 'react'
import CardLeft from './CardLeft'

export default function CardandDetailLeft({ title, description, src }) {
    return (
        <div className='container'>
            <div className='row justify-content-evenly align-items-center'>
                <div className='col-md-12 col-lg-5 flex-column justify-content-center gap-4'>
                    <h1 className='header_text'>
                        {title || 'title'}
                    </h1>
                    <p className='px-5'>{description}</p>
                </div>
                <div className='text-center col-md-8 col-lg-5'>
                    <CardLeft bigImage={src} />
                </div>
            </div>
        </div>
    )
}

import React from 'react'

export default function CardRight({ el }) {
    return (
        <div className='CL_Img p-5'>
            <img className='CL_Img_main' src={el.img_big || 'https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29sb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60'} alt="" />
            <img className='CL_Img_right' src={el.img_sm || 'https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29sb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60'} alt="" />
        </div>
    )
}

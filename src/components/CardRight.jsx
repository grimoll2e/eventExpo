import React from 'react'

export default function CardRight({ el }) {
    return (
        <div className='position-relative p-3'>
            <img className='CL_Img_main w-100 rounded-5 object-fit-cover' src={el.img_big || 'https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29sb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60'} alt="" />
            <img className='CL_Img_right position-absolute rounded-5 w-50 top-50 translate-middle border border-5 border-white object-fit-cover' src={el.img_sm || 'https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29sb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60'} alt="" />
        </div>
    )
}

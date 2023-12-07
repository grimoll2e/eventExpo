export default function CardLeft({ bigImage, image }) {
    return (
        <div className='position-relative p-3'>
            <img className='CL_Img_main w-100 rounded-5 object-fit-cover' src={bigImage || 'https://images.unsplash.com/photo-1557683316-973673baf926?'} alt="" />
            {image && <img className='CL_Img_left position-absolute rounded-5 w-50 top-50 translate-middle border border-5 border-white object-fit-cover' src={image || 'https://images.unsplash.com/photo-1557683316-973673baf926?'} alt="" />}
        </div>
    )
}

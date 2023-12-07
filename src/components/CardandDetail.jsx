import CardandDetailLeft from './CardandDetailLeft'
import CardandEDetailRight from './CardandEDetailRight'

export default function CardandDetail({ title, description, bigImage, idx, image }) {
    return (
        <div className='CardandDetail mb-5'>
            <div className='CardandDetail_list'>
                {idx % 2 === 0 ? <CardandDetailLeft title={title} description={description} bigImage={bigImage} image={image} /> :
                    <CardandEDetailRight title={title} description={description} bigImage={bigImage} image={image} />}
            </div>
        </div>
    )
}

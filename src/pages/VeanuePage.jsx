import CardandDetail from "../components/CardandDetail";
import useVeanue from "../hooks/useVeanue";

const showlimit = 4

export default function VeanuePage() {
    const { allVeanue } = useVeanue()

    return (
        <div className="container mb-5 d-flex flex-column gap-5">
            <div>
                <img className="map_img" src="https://images.unsplash.com/photo-1545987796-200677ee1011?" alt="" />
            </div>
            <div>
                <h1 className="header_text">Veanue Speace</h1>
            </div>
            <div>
                {allVeanue.slice(0, showlimit).map((el, idx) => (
                    <CardandDetail title={el.hallName} description={el.detail} bigImage={el.image} idx={idx} key={idx} />
                ))}
            </div>
        </div>
    )
}

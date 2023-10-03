import CardandDetail from "../layouts/CardandDetail";

const veanue = [
    {}, {}, {}
]

export default function VeanuePage() {
    return (
        <div className="container mb-5 d-flex flex-column gap-5">
            <div>
                <img className="map_img" src="https://images.unsplash.com/photo-1545987796-200677ee1011?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fFNlY3VyaXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60" alt="" />
            </div>
            <div>
                <h1 className="header_text">Veanue Speace</h1>
            </div>
            <div>
                {veanue.map((el, idx) => (
                    <CardandDetail el={el} idx={idx} />
                ))}
            </div>
        </div>
    )
}

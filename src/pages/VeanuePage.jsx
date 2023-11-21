import { useState } from "react";
import { useEffect } from "react";

import CardandDetail from "../components/CardandDetail";
import * as hallApi from '../apis/hall-api'

const showlimit = 4

export default function VeanuePage() {

    const [veanue, setVeanue] = useState([])


    useEffect(() => {
        const getallhall = async () => {
            const res = await hallApi.getall()
            setVeanue(res.data)
        }
        getallhall()
    }, [])

    return (
        <div className="container mb-5 d-flex flex-column gap-5">
            <div>
                <img className="map_img" src="https://images.unsplash.com/photo-1545987796-200677ee1011?" alt="" />
            </div>
            <div>
                <h1 className="header_text">Veanue Speace</h1>
            </div>
            <div>
                {veanue.slice(0, showlimit).map((el, idx) => (
                    <CardandDetail title={el.hallName} description={el.detail} src={el.image} idx={idx} key={idx} />
                ))}
            </div>
        </div>
    )
}

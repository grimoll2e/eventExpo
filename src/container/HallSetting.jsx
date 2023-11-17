import SettingList from "../components/SettingList";
import HallForm from "../features/auth/HallForm";
import * as hallApi from '../apis/hall-api'
import { useEffect } from "react";
import { useState } from "react";

export default function HallSetting() {
    const [value, setValue] = useState()

    useEffect(() => {
        const getallhall = async () => {
            const res = await hallApi.getall()
            setValue(res.data)
        }
        getallhall()
    }, [])

    const handleEdit = async (input, hallid) => {
        await hallApi.updatehall(input, hallid)
        setValue(prv => prv.map(el => el.id === hallid ? { ...el, ...input } : el))
    }

    const handleDelete = async (hallid) => {
        await hallApi.deletehall(hallid)
        setValue((prv) => prv.filter(el => el.id !== hallid))
    }

    const handleSubmit = async (input) => {
        const res = await hallApi.createHall(input)
        setValue((prv) => [...prv, res.data.post])
    }
    return (
        <>
            <HallForm handleSubmit={handleSubmit} />
            {
                value && value.map((el, idx) => <SettingList id={el.id} name={el.hallName} detail={el.detail} idx={idx} key={idx} handleDelete={handleDelete} handleEdit={handleEdit} />)
            }

        </>
    )
}

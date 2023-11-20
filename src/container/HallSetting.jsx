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

    const handleEdit = async (input, hallid, file) => {
        if (file) {
            const formData = new FormData()
            formData.append('image', file)

            Object.entries(input).forEach(([key, value]) => {
                formData.append(key, value);
            });
            const res = await hallApi.updatehall(formData, hallid)
            setValue(prv => prv.map(el => el.id === hallid ? { ...el, ...res.data.result } : el))
        } else {
            const res = await hallApi.updatehall(input, hallid)
            setValue(prv => prv.map(el => el.id === hallid ? { ...el, ...res.data.result } : el))
        }
    }

    const handleDelete = async (hallid) => { 
        await hallApi.deletehall(hallid)
        setValue((prv) => prv.filter(el => el.id !== hallid))
    }

    const handleSubmit = async (input, file) => {
        if (file) {
            const formData = new FormData()
            formData.append('image', file)

            Object.entries(input).forEach(([key, value]) => {
                formData.append(key, value);
            });
            const res = await hallApi.createHall(formData)
            setValue((prv) => [...prv, res.data.post])
        } else {
            const res = await hallApi.createHall(input)
            setValue((prv) => [...prv, res.data.post])
        }
    }

    return (
        <>
            <HallForm
                handleSubmit={handleSubmit}
            />
            {
                value && value.map((el, idx) => (
                    <SettingList
                        el={el}
                        idx={idx}
                        key={idx}
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                    />))
            }

        </>
    )
}

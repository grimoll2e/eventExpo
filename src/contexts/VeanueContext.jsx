import { createContext, useState, useEffect } from "react";

import * as hallApi from "../apis/hall-api"

export const VeanueContext = createContext()
export default function VeanueContextProvideer({ children }) {
    const [allVeanue, setAllVeanue] = useState([])

    useEffect(() => {
        const fetchaData = async () => {
            const res = await hallApi.getall();
            setAllVeanue(res.data.result)
        }
        fetchaData()
    }, [])

    const handleSubmit = async (input, file) => {
        const formData = new FormData()
        if (file) {
            formData.append('image', file)
        }
        Object.entries(input).forEach(([key, value]) => {
            formData.append(key, value);
        });
        const res = await hallApi.createHall(formData)
        setAllVeanue((prv) => [...prv, res.data.post])
    }
    const handleEdit = async (input, hallid, file) => {
        const formData = new FormData()
        if (file) {
            formData.append('image', file)
        }
        Object.entries(input).forEach(([key, value]) => {
            formData.append(key, value);
        });
        const res = await hallApi.updateHall(formData, hallid)
        setAllVeanue(prv => prv.map(el => el.id === hallid ? { ...el, ...res.data.result } : el))
    }
    const handleDelete = async (hallid) => {
        await hallApi.deleteHall(hallid)
        setAllVeanue((prv) => prv.filter(el => el.id !== hallid))
    }
    return (
        <VeanueContext.Provider value={{ allVeanue, handleSubmit, handleEdit, handleDelete }}>
            {children}
        </VeanueContext.Provider>
    )
}
import { createContext, useState, useEffect } from 'react'

import * as boothApi from '../apis/booth-api'

import useAuth from '../hooks/useAuth'

export const BoothContext = createContext()

export default function BoothContextProvider({ children }) {
    const { authenticatedUser } = useAuth()
    const [booth, setBooth] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const res = await boothApi.getByUserId()
            setBooth(res.data.result)
        }
        fetchData()
    }, [authenticatedUser])

    const handleCreateBooth = async (input, file) => {
        const formData = new FormData()
        if (file) {
            formData.append('image', file)
        }
        Object.entries(input).forEach(([key, value]) => {
            formData.append(key, value);
        });
        const res = await boothApi.create(formData)
        setBooth((prv) => [res.data.post, ...prv])

    }
    const handleEditBooth = async (input, id, file) => {
        const formData = new FormData()
        if (file) {
            formData.append('image', file)
        }
        Object.entries(input).forEach(([key, value]) => {
            formData.append(key, value);
        });
        const res = await boothApi.edit(formData, id)
        setBooth(prv => prv.map(el => el.id === id ? { ...el, ...res.data.result } : el))
    }
    const handleDeleteBooth = async (id) => {
        await boothApi.deleteBooth(id)
        setBooth((prv) => prv.filter(el => el.id !== id))
    }

    return (
        <BoothContext.Provider value={{ booth, setBooth, handleCreateBooth, handleEditBooth, handleDeleteBooth }}>
            {children}
        </BoothContext.Provider>
    )
}
import { useState, useEffect } from 'react'

import CreateEventForm from '../features/auth/CreateEventForm'
import SettingList from '../components/SettingList'
import * as eventApi from '../apis/event-api'

export default function CreateEventSetting() {
    const [value, setValue] = useState()

    useEffect(() => {
        const getallhall = async () => {
            const res = await eventApi.getall()
            setValue(res.data)
        }
        getallhall()
    }, [])

    const handleSubmit = async (input, file) => {
        if (file) {
            const formData = new FormData()
            formData.append('image', file)

            Object.entries(input).forEach(([key, value]) => {
                formData.append(key, value);
            });
            const res = await eventApi.createEvent(formData)
            console.log(res)
            setValue((prv) => [...prv, res.data.post])
        } else {
            const res = await eventApi.createEvent(input)
            setValue((prv) => [...prv, res.data.post])
        }
    }
    const handleDelete = async (id) => {
        await eventApi.deleteEvnt(id)
        setValue((prv) => prv.filter(el => el.id !== id))
    }
    const handleEdit = async (input, id, file) => {
        if (file) {
            const formData = new FormData()
            formData.append('image', file)

            Object.entries(input).forEach(([key, value]) => {
                formData.append(key, value);
            });
            const res = await eventApi.updateEvent(formData, id)
            setValue(prv => prv.map(el => el.id === id ? { ...el, ...res.data.result } : el))
        } else {
            const res = await eventApi.updateEvent(input, id)
            setValue(prv => prv.map(el => el.id === id ? { ...el, ...res.data.result } : el))
        }
    }
    const formatISODate = (input) => {
        const date = new Date(input);
        const day = date.getDate();
        const month = date.getMonth() + 1; // เดือนเริ่มที่ 0, จึงต้องบวก 1
        const year = date.getFullYear();

        const formattedDate = `${day}/${month}/${year}`; //(DD/MM/YYYY)

        return formattedDate;
    }
    return (
        <div>
            <CreateEventForm handleSubmit={handleSubmit} />
            {
                value && value.map((el, idx) => (
                    <SettingList
                        name={el.title}
                        detail={el.description}
                        src={el.image}
                        id={el.id}
                        idx={idx}
                        key={idx}
                        handleDelete={handleDelete}
                    >
                        <CreateEventForm
                            name={el.title}
                            detail={el.description}
                            id={el.id}
                            period={formatISODate(el.period)}
                            src={el.image}
                            hallId={el.hallId}
                            handleEdit={handleEdit}
                        />
                    </SettingList>))
            }
        </div>
    )
}

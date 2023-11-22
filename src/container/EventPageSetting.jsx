import { useEffect, useState } from 'react'

import * as eventApi from '../apis/event-api'

import EventPageForm from '../features/auth/EventPageForm'
import ListItem from '../components/ListItem'
import Button from '../components/Button'

export default function EventPageSetting() {

    const [values, setValues] = useState([])
    const [id, setId] = useState(null)
    const [valueById, setValueById] = useState()
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const res = await eventApi.getall()
            setValues(res.data.result)
            if (id) {
                console.log(id)
                const resById = await eventApi.getById(id)
                setValueById(resById.data.result.EventDetails)
            }
        }
        fetchData()
    }, [id])

    const handleSubmit = async (input, bigImage, image, id) => {
        let formData = new FormData()

        if (bigImage) {
            formData.append('bigImage', bigImage)
        }
        if (image) {
            formData.append('image', image)
        }
        Object.entries(input).forEach(([key, value]) => {
            formData.append(key, value);
            // console.log('key: ' + key + ' value : ' + value)
        })
        // console.log(formData)
        const res = await eventApi.createEventDetail(formData, id)
        setValueById((prv) => [...prv, res.data.post])
        setToggle(false)
    }

    return (
        <div>
            <select class="form-select" aria-label="Default select example" onChange={(e) => setId(e.target.value)}>
                <option selected>Open this select Event</option>
                {values && values.map((el, idx) => (
                    <option key={idx} value={el.id}>{el.title}</option>
                ))}
            </select>
            {!toggle ?
                (id && <div className='d-flex justify-content-center mt-3'>
                    <Button text={'Add EventDetail'} onClick={() => setToggle(true)} />
                </div>)
                : <EventPageForm
                    id={id}
                    handleSubmit={handleSubmit}
                />
            }
            {valueById && valueById.map((el, idx) => (
                <ListItem
                    name={el.title}
                    detail={el.detail}
                    idx={idx}
                    src={el.bigImage}
                    id={el.id}
                >
                    <EventPageForm
                        id={el.id}
                        name={el.name}
                        bigSrc={el.bigImage}
                        src={el.image}
                        title={el.title}
                        detail={el.detail}
                    />
                </ListItem>
            ))}
        </div>
    )
}

import { useState } from 'react'

import CreateEventForm from '../features/auth/CreateEventForm'
import ListItem from '../components/ListItem'
import Button from '../components/Button'

import useEvent from '../hooks/useEvent'

export default function CreateEventSetting() {

    const { allEvent, handleDeleteEvent } = useEvent()
    const [toggle, setToggle] = useState(false)

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
            {toggle ?
                <CreateEventForm setToggle={setToggle} /> :
                <div className='d-flex justify-content-center'>
                    <Button text={'Create Event'} onClick={() => setToggle(true)} />
                </div>
            }
            {
                allEvent && allEvent.map((el, idx) => (
                    <ListItem
                        name={el.title}
                        detail={el.description}
                        src={el.image}
                        id={el.id}
                        idx={idx}
                        key={idx}
                        handleDelete={handleDeleteEvent}
                    >
                        <CreateEventForm
                            name={el.title}
                            detail={el.description}
                            id={el.id}
                            period={formatISODate(el.period)}
                            src={el.image}
                            hallId={el.hallId}
                        />
                    </ListItem>))
            }
        </div>
    )
}

import { useState } from 'react'

import CreateEventForm from './CreateEventForm'
import ListItem from '../../components/ListItem'
import Button from '../../components/Button'

import useEvent from '../../hooks/useEvent'

export default function CreateEventSetting() {

    const { allEvent, handleDeleteEvent } = useEvent()
    const [toggle, setToggle] = useState(false)

    const formatISODate = (input) => {
        const date = new Date(input);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');; // เดือนเริ่มที่ 0, จึงต้องบวก 1
        const year = date.getFullYear();
        const formattedDate = `${day}/${month}/${year}`; //(DD/MM/YYYY)
        // console.log('formattedDate : ' + formattedDate)
        return formattedDate;
    }

    return (
        <>
            {toggle ?
                <CreateEventForm toggleForCreate={() => setToggle(false)} /> :
                <div className='d-flex justify-content-center'>
                    <Button text={'Creat Event'} onClick={() => setToggle(true)} />
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
                            id={el.id}
                            title={el.title}
                            description={el.description}
                            period={formatISODate(el.period)}
                            hallId={el.hallId}
                            src={el.image}
                        />
                    </ListItem>))
            }

        </>
    )
}
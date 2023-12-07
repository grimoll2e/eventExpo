import { useState } from 'react'

import ListItem from '../components/ListItem'
import Button from '../components/Button'
import BoothForm from '../features/auth/BoothForm'

import useBooth from '../hooks/useBooth'

export default function BoothSetting() {
    const { booth, handleCreateBooth, handleEditBooth, handleDeleteBooth } = useBooth()
    const [toggle, setToggle] = useState(false)
    return (
        <>
            {toggle ?
                <BoothForm handleSubmit={handleCreateBooth} setToggle={setToggle} /> :
                <div className='d-flex justify-content-center'>
                    <Button text={'Create Booth'} onClick={() => setToggle(true)} />
                </div>
            }
            {booth ? booth.map((el, idx) => (
                <ListItem
                    key={idx}
                    name={el.title}
                    detail={el.description}
                    src={el.image}
                    id={el.id}
                    handleDelete={handleDeleteBooth}
                >
                    <BoothForm
                        name={el.title}
                        detail={el.description}
                        src={el.image}
                        id={el.id}
                        handleEdit={handleEditBooth}
                    />
                </ListItem>
            )) : null}
        </>
    )
}

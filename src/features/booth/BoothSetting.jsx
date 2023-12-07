import { useState } from 'react'

import ListItem from '../../components/ListItem'
import Button from '../../components/Button'
import BoothForm from './BoothForm'

import useBooth from '../../hooks/useBooth'

export default function BoothSetting() {
    const { booth, handleDeleteBooth } = useBooth()
    const [toggle, setToggle] = useState(false)
    return (
        <>
            {toggle ?
                <BoothForm toggleForCreate={() => setToggle(false)} /> :
                <div className='d-flex justify-content-center'>
                    <Button text={'Creat Hall'} onClick={() => setToggle(true)} />
                </div>
            }

            {
                booth && booth.map((el, idx) => (
                    <ListItem
                        name={el.title}
                        detail={el.description}
                        src={el.image}
                        id={el.id}
                        idx={idx}
                        key={idx}
                        handleDelete={handleDeleteBooth}
                    >
                        <BoothForm
                            title={el.title}
                            description={el.description}
                            link={el.link}
                            id={el.id}
                            src={el.image}
                        />
                    </ListItem>))
            }

        </>
    )
}


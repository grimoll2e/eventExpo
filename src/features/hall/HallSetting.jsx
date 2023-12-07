import { useState } from "react";

import ListItem from "../../components/ListItem";
import Button from "../../components/Button";
import HallForm from "./HallForm";

import useVeanue from "../../hooks/useVeanue";

export default function HallSetting() {

    const { allVeanue, handleDelete } = useVeanue()
    const [toggle, setToggle] = useState(false)

    const testFunc = (values, image, id) => {
        console.log(values, image, id)
    }

    return (
        <>
            {toggle ?
                <HallForm toggleForCreate={() => setToggle(false)} /> :
                <div className='d-flex justify-content-center'>
                    <Button text={'Creat Hall'} onClick={() => setToggle(true)} />
                </div>
            }

            {
                allVeanue && allVeanue.map((el, idx) => (
                    <ListItem
                        name={el.hallName}
                        detail={el.detail}
                        src={el.image}
                        id={el.id}
                        idx={idx}
                        key={idx}
                        handleDelete={handleDelete}
                    >
                        <HallForm
                            id={el.id}
                            name={el.hallName}
                            detail={el.detail}
                            src={el.image}
                            testFunc={testFunc}
                        />
                    </ListItem>))
            }

        </>
    )
}

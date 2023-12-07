import { useState } from "react";

import ListItem from "../components/ListItem";
import Button from "../components/Button";
import HallForm from "../features/auth/HallForm";

import useVeanue from "../hooks/useVeanue";

export default function HallSetting() {

    const { allVeanue, handleDelete } = useVeanue()
    const [toggle, setToggle] = useState(false)

    return (
        <>  
            {toggle ?
                <HallForm setToggle={setToggle} /> :
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
                            link={el.link}
                            hallid={el.id}
                            src={el.image}
                        />
                    </ListItem>))
            }

        </>
    )
}

import { useState } from "react";
import Button from "./Button";
import Image from "./Image";
import HallForm from "../features/auth/HallForm";

export default function SettingList({ el, handleDelete, handleEdit, idx }) {

    const [toggle, setToggle] = useState(false);


    return (
        <>
            {toggle ? <div className="bg-body-secondary p-3 my-3" key={idx}>
                <HallForm
                    handleToggleClick={() => setToggle(false)}
                    name={el.hallName}
                    detail={el.detail}
                    hallid={el.id}
                    handleEdit={handleEdit}
                    src={el.image}
                />
            </div> : <div className="d-flex bg-body-secondary p-2 rounded-2 gap-3 col-12 mt-3" onClick={() => setToggle(true)}>
                    <Image
                        size={100}
                        src={el.image}
                    />
                <div className="flex-grow-1">
                        <p>name {el.hallName}</p>
                        <p>detail {el.detail}</p>
                </div>
                <div>
                    <Button text={'delete'} onClick={(e) => {
                        e.stopPropagation();
                            handleDelete(el.id)
                    }} />
                </div>
            </div >}
        </>
    );
}

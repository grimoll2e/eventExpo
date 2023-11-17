import { useState } from "react";
import Button from "./Button";
import Image from "./Image";
import HallForm from "../features/auth/HallForm";

export default function SettingList({ name, detail, idx, handleDelete, id, handleEdit }) {
    const [toggle, setToggle] = useState(false);


    return (
        <>
            {toggle ? <div className="bg-body-secondary p-3 my-3" key={idx}>
                <HallForm handleToggleClick={() => setToggle(false)} name={name} detail={detail} id={id} handleEdit={handleEdit} />
            </div> : <div className="d-flex bg-body-secondary p-2 rounded-2 gap-3 col-12 mt-3" onClick={() => setToggle(true)}>
                <Image size={100} />
                <div className="flex-grow-1">
                    <p>name {name}</p>
                    <p>detail {detail}</p>
                </div>
                <div>
                    <Button text={'delete'} onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(id)
                    }} />
                </div>
            </div >}
        </>
    );
}

import React, { useState } from "react";
import Button from "./Button";
import Image from "./Image";
import useLoading from "../hooks/useLoading";
import { toast } from "react-toastify";

export default function SettingList({ name, detail, handleDelete, idx, children, src, id }) {

    const [toggle, setToggle] = useState(false);
    const { isLoading, isFinish } = useLoading()


    return (
        <>
            {toggle ? <div className="bg-body-secondary p-3 my-3" key={idx}>
                {children && React.cloneElement(children, { handleToggleClick: () => setToggle(false) })}
            </div> : <div className="d-flex bg-body-secondary p-2 rounded-2 gap-3 col-12 mt-3" onClick={() => setToggle(true)}>
                    <Image
                        size={100}
                        src={src}
                    />
                <div className="flex-grow-1">
                        <p>name {name}</p>
                        <p>detail {detail}</p>
                </div>
                <div>
                        <Button text={'delete'} onClick={async (e) => {
                            try {
                                e.stopPropagation();
                                isLoading()
                                await handleDelete(id)
                                toast.success(`DELETE SUCCESS`)
                            } catch (error) {
                                toast.error(`Someting wrong!!??!!`)
                            } finally {
                                isFinish()

                            }
                    }} />
                </div>
            </div >}
        </>
    );
}

import React, { useState } from "react";
import { toast } from "react-toastify";

import Button from "./Button";
import Image from "./Image";

import useLoading from "../hooks/useLoading";

export default function ListItem({ name, detail, idx, children, src, id, handleDelete }) {
    const { isLoading, isFinish } = useLoading()

    const [toggle, setToggle] = useState(false);


    return (
        <div className="">
            {
                toggle ?
                    <div className="bg-body-secondary py-3 my-3" key={idx}>
                        {children && React.cloneElement(children, { handleToggleClick: () => setToggle(false) })}
                    </div> :
                    <div className="d-flex bg-dark-subtle p-2 rounded-2 gap-3 col-12 mt-3" onClick={() => setToggle(true)}>
                        <Image size={100} src={src} />
                        <div className="flex-grow-1">
                            <p>name : {name}</p>
                            <p>detail : {detail}</p>
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
                            }}
                            />
                        </div>
                    </div >
            }
        </div>
    );
}

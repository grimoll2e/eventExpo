import React from 'react'
import Image from './Image'
import Button from './Button'

export default function ImageInput({ src, addclass, handleEdit, handleSave, handleCancle, file, setFile, inputEl, size, text }) {
    return (
        <div className="d-flex flex-column gap-3  align-items-center ">
            {text && <p className='mb-0'>{text}</p>}
            <Image src={src} addclass={addclass} onClick={handleEdit} size={size} />
            <input type="file" className='d-none' ref={inputEl} onChange={e => {
                if (e.target.files[0]) {
                    setFile(e.target.files[0])
                }
            }} />
            <div className="d-flex gap-2">
                {/* {file && <Button text={'Save'} onClick={handleSave} />} */}
                {/* {file && <Button text={'Cancle'} onClick={handleCancle} />} */}
                <Button text={"Change Image"} onClick={handleEdit} />
            </div>
        </div>
    )
}

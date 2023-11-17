import React from 'react'
import Image from './Image'
import Button from './Button'

export default function ImageInput({ src, addclass, handleEdit, handleSave, handleCancle, file, setFile, inputEl }) {
    return (
        <div className="d-flex flex-column gap-3 col-lg-5 col-md-6 align-items-center ">
            <Image src={src} addclass={addclass} onClick={handleEdit} />
            <input type="file" className='d-none' ref={inputEl} onChange={e => {
                if (e.target.files[0]) {
                    setFile(e.target.files[0])
                }
            }} />
            <div className="d-flex gap-2">
                {file && <Button text={'Save'} onClick={handleSave} />}
                {file && <Button text={'Cancle'} onClick={handleCancle} />}
                <Button text={'Change Image'} onClick={handleEdit} />
            </div>
        </div>
    )
}

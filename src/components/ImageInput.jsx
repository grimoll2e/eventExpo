import Image from './Image'
import Button from './Button'

export default function ImageInput({ src, addclass, onClick, setFile, inputEl, size, text }) {
    return (
        <div className="d-flex flex-column gap-3  align-items-center ">
            {text && <p className='mb-0'>{text}</p>}
            <Image src={src} addclass={addclass} onClick={onClick} size={size} />
            <input type="file" className='d-none' ref={inputEl} onChange={e => {
                if (e.target.files[0]) {
                    setFile(e.target.files[0])
                }
            }} />
            <div className="d-flex gap-2">
                <Button text={"Change Image"} onClick={onClick} />
            </div>
        </div>
    )
}

import { useEffect, useState, useRef } from 'react'

import useEvent from '../hooks/useEvent'
import Image from '../components/Image'
import EventZoneForm from '../features/auth/EventZoneForm'
import Button from '../components/Button'

const valueOpacity = '0.6'

export default function EventZone() {
    const { allEvent, getEventById, eventById, getAllEventZoneByEventId, eventZoneById, setEvetZoneById, handleCreateEventZone, handleEditEventZone, handleDeleteEventZone } = useEvent()
    const [eventId, setEventId] = useState(null)
    const [editId, setEditId] = useState(null)
    const [createToggle, setCreateToggle] = useState(false)
    const [createvalue, setCreateValue] = useState({})

    const bigBox = useRef(null)

    useEffect(() => {
        const fetchdata = () => {
            if (eventId === '0') {
                setEventId(null);
                getAllEventZoneByEventId(null)
            } else {
                getEventById(eventId);
                getAllEventZoneByEventId(eventId)
            }
        }
        fetchdata()
    }, [eventId]);

    const handleDragStart = (idx) => {
        setEditId(idx)
        const handleDragMove = (e) => {
            if (eventZoneById[idx]) {
                let xPercentage = parseInt((((e.pageX - bigBox.current.offsetLeft) / bigBox.current.clientWidth) * 100) - (eventZoneById[idx].width / 2));
                let yPercentage = parseInt((((e.pageY - bigBox.current.offsetTop) / bigBox.current.clientHeight) * 100) - (eventZoneById[idx].height / 2));
                if (xPercentage > 100 - eventZoneById[idx].width || xPercentage < 0) {
                    xPercentage = Math.max(0, Math.min(xPercentage, 100 - eventZoneById[idx].width));
                }
                if (yPercentage > 100 - eventZoneById[idx].height || yPercentage < 0) {
                    yPercentage = Math.max(0, Math.min(yPercentage, 100 - eventZoneById[idx].height));
                }
                setEvetZoneById((prev) => prev.map((el, index) => index === idx ? { ...el, yaixs: yPercentage, xaixs: xPercentage } : el))
            } else if (createvalue) {
                let xPercentage = parseInt((((e.pageX - bigBox.current.offsetLeft) / bigBox.current.clientWidth) * 100) - (createvalue.width / 2));
                let yPercentage = parseInt((((e.pageY - bigBox.current.offsetTop) / bigBox.current.clientHeight) * 100) - (createvalue.height / 2));
                if (xPercentage > 100 - createvalue.width || xPercentage < 0) {
                    xPercentage = Math.max(0, Math.min(xPercentage, 100 - createvalue.width));
                }
                if (yPercentage > 100 - createvalue.height || yPercentage < 0) {
                    yPercentage = Math.max(0, Math.min(yPercentage, 100 - createvalue.height));
                }
                setCreateValue(prev => ({ ...prev, yaixs: yPercentage, xaixs: xPercentage }));
            }
        }
        const handleDragEnd = () => {
            bigBox.current.removeEventListener('mousemove', handleDragMove);
            bigBox.current.removeEventListener('mouseup', handleDragEnd);
        };

        bigBox.current.addEventListener('mousemove', handleDragMove);
        bigBox.current.addEventListener('mouseup', handleDragEnd);
    }


    return (
        <>
            <div>EventZone</div>
            <select className="form-select" aria-label="Default select example" onChange={(e) => setEventId(e.target.value)}>
                <option value={0}>Open this select Event</option>
                {allEvent && allEvent.map((el, idx) => (
                    <option key={idx} value={el.id}>{el.title}</option>
                ))}
            </select>
            <div className='mt-3 position-relative' ref={bigBox}>
                {eventById && <Image
                    src={eventById.Hall.image}
                    size={'100%'}
                />}
                {eventZoneById && eventZoneById.map((el, idx) => (
                    <div className='position-absolute d-flex justify-content-center align-items-center rounded'
                        key={idx}
                        onMouseDown={() => handleDragStart(idx)}
                        style={{
                            top: `${el.yaixs}%`,
                            left: `${el.xaixs}%`,
                            width: `${el.width}%`,
                            height: `${el.height}%`,
                            backgroundColor: el.color,
                            opacity: valueOpacity,
                            cursor: 'move',
                        }}>
                        <h1 style={{ userSelect: 'none' }}>
                            {el.title}
                        </h1>
                    </div>
                )
                )}
                {createvalue && <div className='position-absolute d-flex justify-content-center align-items-center rounded'
                    onMouseDown={() => handleDragStart()}
                    style={{
                        top: `${createvalue.yaixs}%`,
                        left: `${createvalue.xaixs}%`,
                        width: `${createvalue.width}%`,
                        height: `${createvalue.height}%`,
                        backgroundColor: createvalue.color,
                        opacity: valueOpacity,
                        cursor: 'move',
                    }}>
                    <h1 style={{ userSelect: 'none' }}>
                        {createvalue.title}
                    </h1>
                </div>}
            </div>
            {createToggle ?
                < EventZoneForm
                    handleSubmit={handleCreateEventZone}
                    eventId={eventId}
                    createToggle={createToggle}
                    setCreateValue={setCreateValue}
                    title={createvalue.title}
                    xaixs={createvalue.xaixs}
                    yaixs={createvalue.yaixs}
                    width={createvalue.width}
                    height={createvalue.height}
                    color={createvalue.color}
                    onCancel={() => setCreateToggle(false)}
                /> :
                <div>
                    <Button text={'Create'} onClick={() => setCreateToggle(true)} />
                </div>}
            {eventZoneById && eventZoneById.map((el, idx) => (
                <EventZoneForm
                    key={idx}
                    id={idx}
                    handleEdit={handleEditEventZone}
                    handleDelete={handleDeleteEventZone}
                    editId={editId}
                    setEvetZoneById={setEvetZoneById}
                    title={el.title}
                    xaixs={el.xaixs}
                    yaixs={el.yaixs}
                    width={el.width}
                    height={el.height}
                    color={el.color}
                    onCancel={() => setEditId(null)}
                />
            ))}
        </>
    )
}

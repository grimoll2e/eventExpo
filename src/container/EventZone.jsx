import { useEffect, useState, useRef } from 'react'

import ListItem from '../components/ListItem'
import useEvent from '../hooks/useEvent'
import Image from '../components/Image'
import EventZoneForm from '../features/auth/EventZoneForm'
import Button from '../components/Button'

const valueOpacity = '0.6'

export default function EventZone() {
    const { allEvent, getEventById, eventById, getAllEventZoneByEventId, eventZoneById } = useEvent()
    const [eventId, setEventId] = useState(null)
    const [previewdata, setPreviewdata] = useState({})
    const [createToggle, setCreateToggle] = useState(false)
    // const [smallBox, setSmallBox] = useState([])

    const refs = {
        smallBox: useRef(null),
        bigBox: useRef(null),
        mouseEvent: useRef(false),
    };

    const { bigBox, mouseEvent, smallBox } = refs

    let arrRef = useRef([])
    arrRef.current = []

    const calculatePercentages = (e) => {
        let xPercentage = parseInt((((e.pageX - bigBox.current.offsetLeft) / bigBox.current.clientWidth) * 100) - (previewdata.width / 2));
        let yPercentage = parseInt((((e.pageY - bigBox.current.offsetTop) / bigBox.current.clientHeight) * 100) - (previewdata.height / 2));
        if (xPercentage > 100 - previewdata.width || xPercentage < 0) {
            xPercentage = Math.max(0, Math.min(xPercentage, 100 - previewdata.width));
        }
        if (yPercentage > 100 - previewdata.height || yPercentage < 0) {
            yPercentage = Math.max(0, Math.min(yPercentage, 100 - previewdata.height));
        }
        return { xPercentage, yPercentage };
    };

    const onMouseDown = (e) => {
        e.preventDefault();
        mouseEvent.current = true;
        const { xPercentage, yPercentage } = calculatePercentages(e);
        setPreviewdata((prev) => ({ ...prev, xaixs: xPercentage, yaixs: yPercentage }));
    };

    const onMouseUp = (e) => {
        e.preventDefault();
        console.log(previewdata)
        mouseEvent.current = false;
        const { xPercentage, yPercentage } = calculatePercentages(e);
        setPreviewdata((prev) => ({ ...prev, xaixs: xPercentage, yaixs: yPercentage }));
    };

    const onMouseMove = (e) => {
        e.preventDefault();
        const { xPercentage, yPercentage } = calculatePercentages(e);
        if (!mouseEvent.current) {
            return;
        } else {
            setPreviewdata((prev) => ({ ...prev, xaixs: xPercentage, yaixs: yPercentage }));
        }
    };

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

    const addRef = (el) => {
        if (el && !arrRef.current.includes(el)) {
            arrRef.current.push(el)
        }
    }

    useEffect(() => {

        if (smallBox.current) {
            smallBox.current.addEventListener('mousedown', onMouseDown);
            smallBox.current.addEventListener('mouseup', onMouseUp);
        }

        if (bigBox.current) {
            bigBox.current.addEventListener('mousemove', onMouseMove);
        }

        return () => {
            if (smallBox.current) {
                smallBox.current.removeEventListener('mousedown', onMouseDown);
                smallBox.current.removeEventListener('mouseup', onMouseUp);
            }
            if (bigBox.current) {
                bigBox.current.removeEventListener('mousemove', onMouseMove);
            }
        };
    }, [mouseEvent.current])



    useEffect(() => {
        if (arrRef.current) {
            arrRef.current.map((el, idx) => {
                arrRef.current[idx].addEventListener('mousedown', onMouseDown)
                arrRef.current[idx].addEventListener('mouseup', onMouseUp)
            })
        }
        return () => {
            if (arrRef.current) {
                arrRef.current.map((el, idx) => {
                    arrRef.current[idx].removeEventListener('mousedown', () => onMouseDown)
                    arrRef.current[idx].removeEventListener('mouseup', () => onMouseUp)
                })
            }
        }
    }, [arrRef])

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
                <div>
                    {eventZoneById && eventZoneById.map((el, idx) => (
                        <div className='position-absolute d-flex justify-content-center align-items-center rounded'
                            ref={addRef}
                            key={idx}
                            style={{
                                top: `${+el.yaixs}%`,
                                left: `${+el.xaixs}%`,
                                width: `${el.width}%`,
                                height: `${el.height}%`,
                                backgroundColor: el.color,
                                opacity: valueOpacity,
                                cursor: 'pointer'
                            }}>
                            <h1>
                                {el.title}
                            </h1>
                        </div>
                    )
                    )}
                    <div ref={smallBox}>
                        {eventZoneById && previewdata &&
                            <div className='position-absolute d-flex justify-content-center align-items-center rounded'
                                style={{
                                top: `${previewdata.yaixs}%`,
                                left: `${previewdata.xaixs}%`,
                                width: `${previewdata.width}%`,
                                height: `${previewdata.height}%`,
                                backgroundColor: previewdata.color,
                                opacity: valueOpacity,
                                cursor: 'pointer'
                            }}>
                            <h1>
                                {previewdata.title}
                            </h1>
                        </div>
                        }
                    </div>
                </div>
            </div>
            <div>
                {eventZoneById && eventZoneById.map((el, idx) => {
                    return (<Button text={el.title} key={idx} id={el.id} onClick={() => setPreviewdata((prv) => ({ ...prv, ...el }))}></Button>)
                })}
            </div>
            {createToggle ?
                < EventZoneForm
                    previewdata={previewdata}
                    setPreviewdata={setPreviewdata}
                    onCancel={() => setCreateToggle(false)}
                /> : <div>
                    <Button text={'Create'} onClick={() => setCreateToggle(true)} />
                </div>}


        </>
    )
}

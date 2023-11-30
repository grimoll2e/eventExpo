import { useEffect, useState, useRef } from 'react'

import ListItem from '../components/ListItem'
import useEvent from '../hooks/useEvent'
import Image from '../components/Image'
import EventZoneForm from '../features/auth/EventZoneForm'
import Button from '../components/Button'
import { createRef } from 'react'

const data = [
    {
        title: '',
        xaixs: 0,
        yaixs: 0,
        width: 0,
        height: 0,
        color: '#ff0000'
    }]

const valueOpacity = '0.6'

export default function EventZone() {
    const { allEvent, getEventById, eventById, getAllEventZoneByEventId, eventZoneById } = useEvent()
    const [eventId, setEventId] = useState(null)
    const [previewdata, setPreviewdata] = useState({})
    const [createToggle, setCreateToggle] = useState(false)
    const [smallBox, setSmallBox] = useState([])

    const refs = {
        // smallBox: useRef(null),
        bigBox: useRef(null),
        mouseEvent: useRef(false),
        // smallBoxRef: useRef(null)
    };

    const { bigBox, mouseEvent } = refs

    // const smallBoxRef = useRef();

    const calculatePercentages = (e) => {
        let xPercentage = parseInt((((e.pageX - bigBox.current.offsetLeft) / bigBox.current.clientWidth) * 100) - (previewdata.width / 2));
        let yPercentage = parseInt((((e.pageY - bigBox.current.offsetTop) / bigBox.current.clientHeight) * 100) - (previewdata.height / 2));
        if (xPercentage < 0) {
            xPercentage = 0
        }
        if (xPercentage + previewdata.width > 100) {
            xPercentage = 100 - previewdata.width
        }
        if (yPercentage < 0) {
            yPercentage = 0
        }
        if (yPercentage + previewdata.height > 100) {
            yPercentage = 100 - previewdata.height
        }
        return { xPercentage, yPercentage };
    };

    const onMouseDown = (e) => {
        e.preventDefault();
        mouseEvent.current = true;
        console.log('first')
        // const { xPercentage, yPercentage } = calculatePercentages(e);
        // setPreviewdata((prev) => ({ ...prev, xaixs: xPercentage, yaixs: yPercentage }));
    };

    const onMouseUp = (e) => {
        e.preventDefault();
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
        if (eventZoneById) {
            setSmallBox((prv) => eventZoneById.map((_, idx) => prv[idx] || createRef()))
        }

    }, [eventZoneById,])

    useEffect(() => {
        if (smallBox[0]) {
            console.log('hi mom !!!')
            console.log(smallBox)
        }
    }, [smallBox])

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


    useEffect(() => {

        if (smallBox[99]) {
            smallBox[99].current.addEventListener('mousedown', onMouseDown);
            smallBox[99].current.addEventListener('mouseup', onMouseUp);
        }
        if (smallBox) {
            smallBox.map((el, idx) => {
                smallBox[idx].current.addEventListener('mousedown', onMouseDown);
                smallBox[idx].current.addEventListener('mouseup', onMouseUp);
            })
        }

        if (bigBox.current) {
            bigBox.current.addEventListener('mousemove', onMouseMove);
        }

        return () => {

            if (smallBox[99]) {
                smallBox[99].current.removeEventListener('mousedown', onMouseDown);
                smallBox[99].current.removeEventListener('mouseup', onMouseUp);
            }
            if (smallBox) {
                smallBox.map((el, idx) => {
                    smallBox[idx].current.removeEventListener('mousedown', onMouseDown);
                    smallBox[idx].current.removeEventListener('mouseup', onMouseUp);
                })
            }
            // if (smallBox.current) {
            //     smallBox.current.removeEventListener('mousedown', onMouseDown);
            //     smallBox.current.removeEventListener('mouseup', onMouseUp);
            // }

            if (bigBox.current) {
                bigBox.current.removeEventListener('mousemove', onMouseMove);
            }
        };
    }, [mouseEvent.current, smallBox])

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
                            ref={smallBox[idx]}
                            key={idx}
                            style={{
                                top: `${el.yaixs}%`,
                                left: `${el.xaixs}%`,
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
                    ))}
                    {eventZoneById && previewdata &&
                        <div className='position-absolute d-flex justify-content-center align-items-center rounded'
                            ref={smallBox[99]}
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
            <div>
                {eventZoneById && eventZoneById.map((el, idx) => (<Button text={el.title} key={idx} id={el.id} onClick={() => setPreviewdata(el)}></Button>))}
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

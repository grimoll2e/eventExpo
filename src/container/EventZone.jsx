import { useEffect, useState, useRef } from 'react'

import ListItem from '../components/ListItem'
import useEvent from '../hooks/useEvent'
import Image from '../components/Image'
import EventZoneForm from '../features/auth/EventZoneForm'

const data = [
    {
        title: 'a',
        xaixs: '0%',
        yaixs: '0%',
        width: '10%',
        height: '50%',
        color: '#ff0000'
    },
    {
        title: 'b',
        xaixs: '50%',
        yaixs: '50%',
        width: '20%',
        height: '10%',
        color: '#ff00ff'
    },
]
const data2 = [
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
    const { allEvent, getEventById, eventById } = useEvent()
    const [eventId, setEventId] = useState(null)
    const [testdata, setTestdata] = useState({})
    const [mouseEvent, setMouseEvent] = useState(false)

    const refs = {
        smallBox: useRef(null),
        bigBox: useRef(null),
    };

    const { bigBox, smallBox } = refs

    useEffect(() => {
        // if (eventId === '0') {
        //     setEventId(null);
        // } else {
        //     // Assume you have a function getEventById
        //     getEventById(eventId);
        // }
        getEventById(4);
        const calculatePercentages = (e) => {
            const xPercentage = parseInt((((e.clientX - bigBox.current.offsetLeft) / bigBox.current.clientWidth) * 100) - (testdata.width / 2));
            const yPercentage = parseInt((((e.clientY - bigBox.current.offsetTop) / bigBox.current.offsetParent.clientHeight) * 100) - (testdata.height / 2));
            console.log(bigBox)
            return { xPercentage, yPercentage };
        };

        const onMouseDown = (e) => {
            e.stopPropagation();
            setMouseEvent(true)
            const { xPercentage, yPercentage } = calculatePercentages(e);
            setTestdata((prev) => ({ ...prev, xaixs: xPercentage, yaixs: yPercentage }));
        };

        const onMouseUp = (e) => {
            e.stopPropagation();
            setMouseEvent(false);
            const { xPercentage, yPercentage } = calculatePercentages(e);
            setTestdata((prev) => ({ ...prev, xaixs: xPercentage, yaixs: yPercentage }));
        };

        const onMouseMove = (e) => {
            e.stopPropagation();
            const { xPercentage, yPercentage } = calculatePercentages(e);
            if (!mouseEvent) {
                return;
            } else {
                setTestdata((prev) => ({ ...prev, xaixs: xPercentage, yaixs: yPercentage }));
            }
        };

        if (smallBox.current) {
            smallBox.current.addEventListener('mousedown', onMouseDown);
            smallBox.current.addEventListener('mouseup', onMouseUp);
            // smallBox.current.addEventListener('mousemove', onMouseMove);
        }

        if (bigBox.current) {
            bigBox.current.addEventListener('mousemove', onMouseMove);
        }

        return () => {
            if (smallBox.current) {
                smallBox.current.removeEventListener('mousedown', onMouseDown);
                smallBox.current.removeEventListener('mouseup', onMouseUp);
        // smallBox.current.removeEventListener('mousemove', onMouseMove);
            }

            if (bigBox.current) {
                bigBox.current.removeEventListener('mousemove', onMouseMove);
            }
            // console.log(testdata)
        };
    }, [smallBox, bigBox, mouseEvent]);

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
                {/* <p>{testdata}</p> */}
                {eventById && testdata ?
                    <div className='position-absolute d-flex justify-content-center align-items-center rounded'
                        ref={smallBox}
                        style={{
                            top: testdata.yaixs + '%',
                            left: testdata.xaixs + '%',
                            width: testdata.width + '%',
                            height: testdata.height + '%',
                            backgroundColor: testdata.color,
                            opacity: valueOpacity
                        }}>
                        <h1>
                            {testdata.title}
                        </h1>
                    </div>
                    : null

                }
            </div>
            <EventZoneForm
                setTestdata={setTestdata}
                testdata={testdata}
            />


        </>
    )
}

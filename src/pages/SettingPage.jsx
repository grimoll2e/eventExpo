import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

import AccountForm from "../features/auth/AccountForm"
import BoothForm from "../features/auth/BoothForm"
// import EventSetting from "../container/EventSetting"
// import EventPageForm from "../features/auth/EventPageForm"
import EventForm from "../features/auth/EventForm"
import HallSetting from "../container/HallSetting"
import CreateEventSetting from "../container/CreateEventSetting"
import EventPageSetting from "../container/EventPageSetting"
import EventZone from "../container/EventZone"
import * as authApi from '../apis/auth-api'

// ต้อง checkrole ครอบเฉพาะส่วน

const menuData = [
    {
        name: 'Account Setting',
        form: <AccountForm />
    },
    {
        name: 'Booth',
        form: <BoothForm />
    },
    {
        name: 'Event',
        form: <EventForm />
    },
    {
        name: 'SetZone',
        form: <EventZone />
    },
    {
        name: 'CreateEvent',
        form: <CreateEventSetting />
    },
    {
        name: 'Event Page',
        form: <EventPageSetting />
    },
    {
        name: 'Hall Page',
        form: <HallSetting />
    },
]

export default function SettingPage() {
    const { idName } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAuthUser = async () => {
            try {
                const res = await authApi.getMe()
                if (idName !== res.data.user.userName) {
                    return navigate('*')
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchAuthUser()
    }, [idName])


    const [menu, setMenu] = useState(menuData[0].name)

    const selectmenu = menuData.find(el => el.name === menu)

    return (
        <div className="container my-5">
            <div className="w-100 d-flex flex-row gap-2 text-nowrap flex-wrap justify-content-center">
                {menuData.map((el, idx) => (
                    <p key={idx} onClick={() => setMenu(el.name)} className={`setting_menu text-nowrap ${el.name === menu ? 'setting_menu_active pe-none' : 'menu_hover'}`}>{el.name}</p>
                ))}
            </div>
            <div className="align-content-center align-items-center d-flex mb-5 flex-column">
                <hr className="" style={{ height: '2px', color: 'gray', backgroundColor: 'gray', width: '60%' }} />
                <h1 className="header_text">{menu || menuData[0].name}</h1>
            </div>
            {/* form */}
            {selectmenu ? selectmenu.form : <AccountForm />}
        </div>
    )
}

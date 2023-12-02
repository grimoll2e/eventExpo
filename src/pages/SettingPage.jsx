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
import AdminProtectedRouter from "../features/auth/AdminProtectedRouter"
import useAuth from "../hooks/useAuth"

export default function SettingPage() {
    const { role } = useAuth()
    const { idName } = useParams();
    const navigate = useNavigate();

    const settingMenu = [
        {
            name: 'Account Setting',
            element: <AccountForm />,
            forRole: [import.meta.env.VITE_REACT_ROLE_USER, import.meta.env.VITE_REACT_ROLE_ADMIN]
        },
        {
            name: 'Booth',
            element: <BoothForm />,
            forRole: [import.meta.env.VITE_REACT_ROLE_USER, import.meta.env.VITE_REACT_ROLE_ADMIN]
        },
        {
            name: 'Event',
            element: <EventForm />,
            forRole: [import.meta.env.VITE_REACT_ROLE_USER, import.meta.env.VITE_REACT_ROLE_ADMIN]
        },
        {
            name: 'SetZone',
            element: (
                <AdminProtectedRouter>
                    <EventZone />
                </AdminProtectedRouter>
            ),
            forRole: [import.meta.env.VITE_REACT_ROLE_ADMIN]
        },
        {
            name: 'CreateEvent',
            element: (
                <AdminProtectedRouter>
                    <CreateEventSetting />
                </AdminProtectedRouter>
            ),
            forRole: [import.meta.env.VITE_REACT_ROLE_ADMIN]
        },
        {
            name: 'Event Page',
            element: (
                <AdminProtectedRouter>
                    <EventPageSetting />
                </AdminProtectedRouter>
            ),
            forRole: [import.meta.env.VITE_REACT_ROLE_ADMIN]
        },
        {
            name: 'Hall Page',
            element: (
                <AdminProtectedRouter>
                    <HallSetting />
                </AdminProtectedRouter>
            ),
            forRole: [import.meta.env.VITE_REACT_ROLE_ADMIN]
        },
    ]

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


    const [menu, setMenu] = useState(settingMenu[0].name)

    const selectmenu = settingMenu.find(el => el.name === menu)

    return (
        <div className="container my-5">
            <div className="w-100 d-flex flex-row gap-2 text-nowrap flex-wrap justify-content-center">
                {settingMenu.map((el, idx) => (
                    (el.forRole && el.forRole.includes(role)) && (
                    <p key={idx} onClick={() => setMenu(el.name)} className={`setting_menu text-nowrap ${el.name === menu ? 'setting_menu_active pe-none' : 'menu_hover'}`}>{el.name}</p>
                    )
                ))}
            </div>
            <div className="align-content-center align-items-center d-flex mb-5 flex-column">
                <hr className="" style={{ height: '2px', color: 'gray', backgroundColor: 'gray', width: '60%' }} />
                <h1 className="header_text">{menu || settingMenu[0].name}</h1>
            </div>
            {selectmenu ? selectmenu.element : <AccountForm />}
        </div>
    )
}

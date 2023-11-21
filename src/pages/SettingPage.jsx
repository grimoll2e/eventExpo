import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import AccountForm from "../features/auth/AccountForm"
import BoothForm from "../features/auth/BoothForm"
import EventSetting from "../container/EventSetting"
import EventPageForm from "../features/auth/EventPageForm"
import HallSetting from "../container/HallSetting"
import CreateEventSetting from "../container/CreateEventSetting"



const menu = [
    {
        name: 'Account Setting',
        form: <AccountForm />
    },
    {
        name: 'Booth',
        form: <BoothForm />
    },
    {
        name: 'CreateEvent',
        form: <CreateEventSetting />
    },
    {
        name: 'Event',
        form: <EventSetting />
    },
    {
        name: 'Event Page',
        form: <EventPageForm />
    },
    {
        name: 'Hall Page',
        form: <HallSetting />
    },
]

export default function SettingPage() {
    const { idName } = useParams();
    const { authenticatedUser } = useAuth()
    const navigate = useNavigate();

    useEffect(() => {
        if (idName !== authenticatedUser.userName) {
            navigate('*')
        }
        console.log(idName)
    }, [idName, authenticatedUser]);

    const [test, setTest] = useState(menu[0].name)

    const selectmenu = menu.find(el => el.name === test)

    return (
        <div className="container my-5">
            <div className="w-100 d-flex flex-row gap-2 justify-content-center">
                {menu.map((el, idx) => (
                    <p key={idx} onClick={() => setTest(el.name)} className={`setting_menu ${el.name === test ? 'setting_menu_active pe-none' : 'menu_hover'}`}>{el.name}</p>
                ))}
            </div>
            <div className="align-content-center align-items-center d-flex mb-5 flex-column">
                <hr className="" style={{ height: '2px', color: 'gray', backgroundColor: 'gray', width: '60%' }} />
                <h1 className="header_text">{test || menu[0].name}</h1>
            </div>
            {/* form */}
            {selectmenu ? selectmenu.form : <AccountForm />}
        </div>
    )
}

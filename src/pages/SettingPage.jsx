import { useState } from "react"
import AccountForm from "../components/form/AccountForm"
import BoothForm from "../components/form/BoothForm"
import CreateEventForm from "../components/form/CreateEventForm"
import EventForm from "../components/form/EventForm"
import EventPageForm from "../components/form/EventPageForm"
import HallForm from "../components/form/HallForm"

export default function SettingPage() {
    const [test, setTest] = useState(null)
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
            form: <CreateEventForm />
        },
        {
            name: 'Event',
            form: <EventForm />
        },
        {
            name: 'Event Page',
            form: <EventPageForm />
        },
        {
            name: 'Hall Page',
            form: <HallForm />
        },
    ]

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
                <h1 className="header_text">{test}</h1>
            </div>
            {/* form */}
            {selectmenu ? selectmenu.form : null}
        </div>
    )
}

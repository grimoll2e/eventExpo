import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

import AccountForm from "../features/auth/AccountForm"
import * as authApi from '../apis/auth-api'
import useAuth from "../hooks/useAuth"
import SettingMenu from '../routes/SettingMenu'

export default function SettingPage() {
    const { role } = useAuth()
    const { idName } = useParams();
    const navigate = useNavigate();

    const settingMenu = SettingMenu()

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

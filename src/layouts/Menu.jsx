import { useLocation } from "react-router-dom"
import MenuItem from "./MenuItem"

const menuItemList = [
    {
        pathName: "/",
        name: 'Home'
    },
    {
        pathName: "/about",
        name: 'About'
    },
    {
        pathName: "/veanue",
        name: 'Veanue'
    },
    {
        pathName: "/event",
        name: 'Event'
    },
    {
        pathName: "/contact",
        name: 'Contact'
    },
]


export default function Menu() {
    const location = useLocation()

    return (
        <div className="collapse navbar-collapse justify-content-end">
            <div className="navbar-nav">
                {menuItemList.map(el => (
                    <MenuItem
                        to={el.pathName}
                        key={el.pathName}
                        active={location.pathname === el.pathName}
                    >
                        {el.name}
                    </MenuItem>
                ))}
            </div>

        </div>
    )
}

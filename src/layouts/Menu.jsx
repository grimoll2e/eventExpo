import { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import MenuItem from "./MenuItem";
import MenuItemDropdown from "./MenuItemDropdown";
import useAuth from "../hooks/useAuth";

const menuItemList = [
    {
        pathName: "/",
        name: "Home",
    },
    {
        pathName: "/about",
        name: "About",
    },
    {
        pathName: "/veanue",
        name: "Veanue",
    },
    {
        pathName: "/event",
        name: "Event",
    },
    {
        pathName: "/contact",
        name: "Contact",
    }
];
const menuItemdropdown1 = [
    {
        pathName: "/login",
        name: "Login",
    },
    {
        pathName: "/signup",
        name: "Signup",
    },
];
const menuItemdropdown2 = [
    {
        pathName: "/setting",
        name: 'Setting',
    },
];
const user = [
    {
        icon: <FaUserCircle />,
    },
];

export default function Menu() {
    const { authenticatedUser } = useAuth()

    const [toggle, setToggle] = useState(false)

    const location = useLocation();

    return (
        <div className="d-flex align-items-center justify-content-center h-100">
            {menuItemList.map((el, idx) => (
                <div className="position-relative" key={idx}>
                        <MenuItem
                        to={el.pathName}
                        key={idx}
                        active={location.pathname}
                    >
                        {el.name}
                    </MenuItem>
                </div>
            ))}
            {user[0].icon && <h1 className="ms-2" onClick={() => setToggle(!toggle)}>
                {user[0].icon}
            </h1>}
            <MenuItemDropdown
                toggle={toggle}
                setToggle={setToggle}
                data={menuItemList}
                datadropdown={!authenticatedUser ? menuItemdropdown1 : menuItemdropdown2}
                active={location.pathname}
            >
            </MenuItemDropdown>
        </div>
    );
}
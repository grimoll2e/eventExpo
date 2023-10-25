import { useLocation } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import MenuItem from "./MenuItem";
import MenuItemDropdown from "./MenuItemDropdown";

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
    },
    {
        icon: <FaUserCircle />,
        children: [
            {
                pathName: "/login",
                name: "Login",
            },
            {
                pathName: "/signup",
                name: "Signup",
            },
        ],
    },
];

export default function Menu() {
    const [toggle, setToggle] = useState(false)

    const location = useLocation();

    // need edit

    return (
        <div className="d-flex align-items-center justify-content-center ">
            {menuItemList.map((el, idx) => (
                <div className="position-relative" key={idx}>
                    {el.icon ? <h1 className="ms-2" onClick={() => setToggle(!toggle)}>
                        {el.icon}
                    </h1> : <></>}
                    {el.children ? (
                        <MenuItemDropdown
                            toggle={toggle}
                            datachildren={el.children}
                            data={menuItemList}

                        >
                            {el.children}
                        </MenuItemDropdown>
                    ) : (
                        <MenuItem
                            to={el.pathName}
                                key={idx}
                                active={location.pathname === el.pathName}
                            >
                                {el.name}
                            </MenuItem>
                    )}
                </div>
            ))}
        </div>
    );
}
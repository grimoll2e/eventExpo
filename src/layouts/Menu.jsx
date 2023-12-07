import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import MenuItem from "./MenuItem";
import MenuItemDropdown from "./MenuItemDropdown";
import Image from "../components/Image";

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

export default function Menu() {
    const { authenticatedUser } = useAuth()
    // const { authenticatedUser:{userName,userImage} } = useAuth()
    const location = useLocation();
    const [toggle, setToggle] = useState(false)

    const dropdownEL = useRef();
    // const ref = useRef(1) :> (current:1) ,ref=5 (current:5)

    const menuItemdropdown2 = [
        {
            pathName: `/setting/${authenticatedUser ? authenticatedUser.userName : null}`,
            name: 'Setting',
        },
    ];

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!dropdownEL.current.contains(e.target)) {
                setToggle(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

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
            <div ref={dropdownEL}>
                <Image
                    src={authenticatedUser ? authenticatedUser.userImage : null}
                    addclass={'rounded-circle'}
                    size='42'
                    onClick={() => setToggle(!toggle)}
                />
            <MenuItemDropdown
                toggle={toggle}
                setToggle={setToggle}
                data={menuItemList}
                datadropdown={!authenticatedUser ? menuItemdropdown1 : menuItemdropdown2}
                active={location.pathname}
                />
            </div>
        </div>
    );
}
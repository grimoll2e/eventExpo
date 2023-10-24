import { useState } from "react";
import { Link } from "react-router-dom";

export default function MenuDropdown() {
    const [open, setOpen] = useState(false)
    return (
        <div className="dropdown">
            <div className="dropdown-toggle" onClick={() => setOpen(!open)}> {/* need edit spac*/}
                IconUser
            </div>
            <div className={`dropdown-menu end-0 px-2 mt-1 border shadow-sm rounded-1 w-sm-90 ${open ? 'd-block' : ''}`}>
                <Link to={'/login'} className="dropdown-item p-2 d-flex align-items-center gap-3">Login</Link>
                <Link to={'/signup'} className="dropdown-item p-2 d-flex align-items-center gap-3">Signup</Link>
            </div>
        </div>
    )
}
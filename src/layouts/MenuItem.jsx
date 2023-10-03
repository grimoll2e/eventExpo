import { Link } from "react-router-dom";

export default function MenuItem({ active, to, children }) {
    return (
        <Link className={`nav-link py-0 my-2 px-2 fs-5 rounded-pill ${active ? 'bg-dark text-white  mx-1' : 'hover-text-secondary-emphasis'
            }`}
            to={to}
        >{children}</Link>
    )
}

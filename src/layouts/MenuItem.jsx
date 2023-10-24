import { Link } from "react-router-dom";

export default function MenuItem({ active, to, children }) {
    return (
        <div className="nav-item">
            <Link
                className={`nav-link py-0 my-2 px-2 fs-5 rounded-pill ${active ? ' text-white bg-dark mx-1 menu_active' : 'menu_hover'}`}
                to={to}
            >
                {children}
            </Link>
        </div>
    )
}

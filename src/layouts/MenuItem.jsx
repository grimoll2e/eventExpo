import { Link } from "react-router-dom";

export default function MenuItem({ active, to, children }) {
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <Link
                className={`nav-link px-2 rounded-pill ${active ? 'text-white bg-dark menu_active' : 'menu_hover'} `}
                to={to}
            >
                <h5 className="m-1">
                    {children}
                </h5>
            </Link>
        </div >
    )
}

import { Link } from "react-router-dom";

export default function MenuItem({ active, to, children }) {
    return (
        <div className='d-flex justify-content-center align-items-center d-none d-xl-block'>
            <Link
                className={`nav-link px-2 rounded-pill ${active === to ? 'text-white bg-dark menu_active pe-none' : 'menu_hover pe-'} `}
                to={to}
            >
                <h5 className="m-1 pe-none">
                    {children}
                </h5>
            </Link>
        </div >
    )
}

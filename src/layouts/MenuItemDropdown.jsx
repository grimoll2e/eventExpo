import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { removeAccessToken } from "../util/local-storage";

export default function MenuItemDropdown({ toggle, setToggle, data, datadropdown, active }) {
    const { authenticatedUser } = useAuth()
    return (
        <div className={`col-12 col-sm-4 col-md-3 col-lg-3 col-xl-2 d-flex flex-column align-items-center  position-absolute bg-body-secondary rounded-bottom py-3 top-100 end-0 px-5 ${toggle ? '' : 'd-none'}`}>
            {data.map((el, idx) => ((
                el.pathName && //
                <Link
                        className={`nav-link px-2 py-1 my-1 rounded-pill ${active === el.pathName ? 'text-white bg-dark menu_active pe-none' : 'menu_hover'} d-xl-none`}
                        to={el.pathName}
                        key={idx}
                        onClick={() => { setToggle(!toggle) }}
                    >
                        {el.name}
                    </Link>
            ))
            )
            }
            <hr className="d-xl-none" style={{ height: '2px', borderWidth: '0', color: 'gray', backgroundColor: 'gray', width: '100%' }} />
            {datadropdown.map((el, idx) => ((
                el.pathName &&
                <Link
                        className='nav-link px-2 py-1 my-1 menu_hover'
                        to={el.pathName}
                        key={idx}
                        onClick={() => { setToggle(!toggle) }}
                            >
                        {el.name}
                    </Link>
            ))
                )
            }
            {!authenticatedUser ? <></> : <p className='nav-link px-2 py-1 my-1 menu_hover' style={{ cursor: 'pointer' }} onClick={removeAccessToken}>log out</p>}
        </div>
    )
}

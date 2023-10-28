import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function MenuItemDropdown({ toggle, data, datadropdown }) {
    const location = useLocation();
    return (
        <div className={`d-flex flex-column align-items-center  position-absolute bg-body-secondary rounded-bottom py-3 top-100 end-0 px-5 ${toggle ? '' : 'd-none'}`}>
            {data.map((el, idx) => ((
                el.pathName &&
                <Link
                        className='nav-link px-2 py-1 my-1 rounded-pill menu_hover d-xl-none'
                        to={el.pathName}
                        key={idx}
                    >
                        {el.name}
                    </Link>
            ))
            )
            }
            <hr style={{ height: '2px', borderWidth: '0', color: 'gray', backgroundColor: 'gray', width: '100%' }} />
            {datadropdown.map((el, idx) => ((
                el.pathName &&
                <Link
                    className='nav-link px-2 py-1 my-1 rounded-pill menu_hover'
                        to={el.pathName}
                        key={idx}
                            >
                        {el.name}
                    </Link>
            ))
                )
            }
        </div>
    )
    // return (
    //     <div className={`d-flex flex-column align-items-center  position-absolute bg-body-secondary py-3 top-100 end-0 px-5 ${toggle ? '' : 'd-none'}`}>
    //         {data.map((el, idx) => (
    //             <Link
    //                 className={`nav-link px-2 py-1 my-1 rounded-pill ${location.pathname === el.pathName ? 'text-white bg-dark mx-1 menu_active' : 'menu_hover'}`}
    //                 to={el.pathName}
    //                 key={idx}
    //             >
    //                 {el.name}
    //             </Link>
    //         ))}
    //         {children.map((el, idx) => (
    //             <Link
    //                 className={`nav-link px-2 py-1 my-1 rounded-pill ${location.pathname === el.pathName ? 'text-white bg-dark mx-1 menu_active' : 'menu_hover'}`}
    //                 key={idx}
    //                 to={el.pathName}
    //             >
    //                 {el.name}
    //             </Link>
    //         ))
    //         }
    //     </div>
    // )
}

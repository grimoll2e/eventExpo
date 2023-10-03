import { Link } from "react-router-dom";

export default function SignupPage() {
    return (
        <div className="container-fluid p-0 position-relative">
            <img className="full_img" src="https://images.unsplash.com/photo-1562832135-14a35d25edef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60" alt="" />
            <div className="position-absolute top-50 start-50 translate-middle form p-2 px-3">
                <form className="d-flex flex-column gap-3">
                    <h1 className="text-center">Signup</h1>
                    <div className="d-flex align-items-start">
                        <label className="me-auto" htmlFor="Username">Username</label>
                        <span className="error_message">error</span>
                    </div>
                    <input className='text_style1 py-1 px-2' type="text" />
                    <div className="d-flex align-items-start">
                        <label className="me-auto" htmlFor="Password">Password</label>
                        <span className="error_message">error</span>
                    </div>
                    <input className='text_style1 py-1 px-2' type="text" />
                    <div className="d-flex align-items-start">
                        <label className="me-auto" htmlFor="Password">Comfirm Password</label>
                        <span className="error_message">error</span>
                    </div>
                    <input className='text_style1 py-1 px-2' type="text" />
                    <div className="d-flex align-items-start">
                        <label className="me-auto" htmlFor="Password">Email</label>
                        <span className="error_message">error</span>
                    </div>
                    <input className='text_style1 py-1 px-2' type="text" />
                    <button className="btn_style1 p-2 px-4" type="submit">Signup</button>
                </form>
                <div className="mt-3">
                    <span>
                        Already Registered ?
                        <Link to={'/login'}>Login</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

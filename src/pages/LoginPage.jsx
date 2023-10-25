import { Link } from "react-router-dom";

export default function LoginPage() {
    return (
        <div className="bg-image w-100" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1562832135-14a35d25edef?)' }}>
            <div className="container-fluid h-100 p-0 position-relative mt-0">
                <div className="position-absolute top-50 start-50 translate-middle form p-2 px-3">
                    <form className="d-flex flex-column gap-3">
                        <h1 className="text-center">Login</h1>
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
                        <button className="btn_style1 p-2 px-4" type="submit">Login</button>
                    </form>
                    <div className="mt-3">
                        <span>
                            Not a member ?
                            <Link to={'/signup'}>Signup now</Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

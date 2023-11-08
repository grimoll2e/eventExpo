import { Link } from "react-router-dom";
import LoginForm from "../features/auth/LoginForm";

import BGimage from '../assets/BGimage.png'

export default function LoginPage() {
    return (
        <div className="bg-image" style={{ backgroundImage: `url(${BGimage})` }}>
            <div className="container-fluid h-100 p-0 position-relative mt-0">
                <div className="position-absolute top-50 start-50 translate-middle form p-2 px-3">
                    <LoginForm />
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
import { Link } from "react-router-dom";
import SignupForm from "../features/auth/SignupForm";




export default function SignupPage() {



    return (
        <div className="bg-image w-100" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1562832135-14a35d25edef?)' }}>
            <div className="container-fluid h-100 p-0 position-relative mt-0">
                <div className="position-absolute top-50 start-50 translate-middle form p-2 px-3">
                    <SignupForm />
                    <div className="mt-3">
                        <span>
                            Already Registered ?
                            <Link to={'/login'}>Login</Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}


import { Outlet } from 'react-router-dom'
import Header from "./Header";

export default function AuthLayout() {
    return (
        <>
            <Header />
            <div className="min-vh-100 pt-5">
                <Outlet />
            </div>
        </>
    )
}

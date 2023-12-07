import { Navigate } from 'react-router-dom'

import useAuth from '../../hooks/useAuth.jsx'

export default function AdminProtectedRouter({ children }) {
    const { role } = useAuth()
    if (role !== 'ADMIN') {
        return <Navigate to={'/'} />
    }
    return children
}


import { useState } from 'react'
import { createContext } from 'react'

export const LoadinContext = createContext()

export default function LoadingContaxtProvider({ children }) {
    const [loading, setLoading] = useState(false)
    const isLoading = () => {
        setLoading(true)
    }
    const isFinish = () => {
        setLoading(false)
    }
    return (
        <LoadinContext.Provider value={{ loading, isLoading, isFinish }}>
            {children}
        </LoadinContext.Provider>
    )
}


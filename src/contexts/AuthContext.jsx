import { useState, useEffect } from "react";
import { createContext } from "react";
import { jwtDecode } from 'jwt-decode'
import * as authApi from '../apis/auth-api'
import { getAccessToken, removeAccessToken, setAccessToken } from "../util/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authenticatedUser, setAuthenticatedUse] = useState(getAccessToken() ? true : null)
  //authenticatedUser ไว้ตรวรสอบว่ามีการ login ไหม

  useEffect(() => {
    const fetchAuthUser = async () => {
      try {
          const res = await authApi.getMe()
        setAuthenticatedUse(res.data.user)
      } catch (error) {
        removeAccessToken()
      }
    }
    if (getAccessToken) {
      fetchAuthUser()
    }
  }, [])


  const login = async (input) => {
    const res = await authApi.login(input)
    setAccessToken(res.data.accessToken)
    setAuthenticatedUse(jwtDecode(res.data.accessToken))
  }

  const logout = () => {
    removeAccessToken()
    setAuthenticatedUse(null)
  }

  return (
    <AuthContext.Provider value={{ authenticatedUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

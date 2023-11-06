import { useState } from "react";
import { createContext } from "react";
import * as authApi from '../apis/auth-api'
import { getAccessToken, removeAccessToken, setAccessToken } from "../util/local-storage";

export const AuthContext = createContext();
export default function AuthContextProvider({ children }) {
  const [authenticatedUser, setAuthenticatedUse] = useState(getAccessToken() ? true : null)
  //authenticatedUser ไว้ตรวรสอบว่ามีการ login ไหม

  const login = async (input) => {
    const res = await authApi.login(input)
    console.dir(res)
    setAccessToken(res.data)
    setAuthenticatedUse(true)
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

import { useState, useEffect, createContext } from "react";
import { jwtDecode } from 'jwt-decode'

import * as authApi from '../apis/auth-api'
import * as userApi from '../apis/user-api'

import { getAccessToken, removeAccessToken, setAccessToken } from "../util/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authenticatedUser, setAuthenticatedUser] = useState(getAccessToken() ? true : null)
  //authenticatedUser ไว้ตรวรสอบว่ามีการ login ไหม
  const [role, setRole] = useState(null)
  const [allUser, setAllUser] = useState(null)

  useEffect(() => {
    const fetchAuthUser = async () => {
      try {
        const res = await authApi.getMe()
        setRole(res.data.user.status)
        setAuthenticatedUser(res.data.user)
      } catch (error) {
        removeAccessToken()
        setAuthenticatedUser(null)
      }
    }
    const accessToken = getAccessToken();
    if (accessToken) {
      fetchAuthUser()
    }
  }, [getAccessToken])

  useEffect(() => {
    if (authenticatedUser) {
      setRole(authenticatedUser ? authenticatedUser.status : null)
    }
  }, [authenticatedUser])


  const login = async (input) => {
    const res = await authApi.login(input)
    setAccessToken(res.data.accessToken)
    setAuthenticatedUser(jwtDecode(res.data.accessToken))
  }

  const logout = () => {
    removeAccessToken()
    setAuthenticatedUser(null)
    setRole(null)
  }

  const updateUserImage = async (data) => {
    const res = await userApi.updateUser(data)
    setAuthenticatedUser({ ...authenticatedUser, ...res.data })
  }

  const getAlluser = async () => {
    const res = await authApi.getAllUser()
    setAllUser(res.data.result)
  }

  return (
    <AuthContext.Provider value={{ authenticatedUser, allUser, login, logout, updateUserImage, role, getAlluser }}>
      {children}
    </AuthContext.Provider>
  );
}

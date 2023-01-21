import React from "react";
import { createContext,useState} from "react";
export const AuthContext=createContext()
export const AuthContextProvider=({children})=>{
    const [isAuth,setIsAuth]=useState(false)
    const [token,setToken]=useState("")
    const login=()=>{
        setIsAuth(true)
    }
    const logout=()=>{
        setIsAuth(false)
    }
    return <AuthContext.Provider value={{isAuth,setIsAuth,login,logout,setToken}}>{children}</AuthContext.Provider>
}
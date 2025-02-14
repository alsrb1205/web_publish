import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(()=>{
        try {
            const token = localStorage.getItem("token")
            return token ? true : false;
        } catch (error) {
            console.error('로컬스토리지 데이터 작업도중 에러발생', error);
            return false;
        }

    });
    
    // 토큰이 있으면 로그인 상태 유지
    useEffect(()=>{
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token);
    }, [])

    return (
        <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}

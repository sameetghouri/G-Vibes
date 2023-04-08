'use client';
import { createContext, useEffect, useState, useContext } from "react";
import netlifyIdentity from "netlify-identity-widget";
const AuthContext = createContext({
    user: null,
    login: () => { },
    logout: () => { },
    authReady: false
});

export const AuthContextProvider = ({ children }) => {
    const [user, setuser] = useState();
    useEffect(() => {
        netlifyIdentity.on("login", (user) => {
            setuser(user)
            netlifyIdentity.close()
            console.log('User Logged in')
        })
        netlifyIdentity.on("logout", () => {
            setuser(null)
            console.log('User Logged Out')
        })
        //init netlify identity connection
            netlifyIdentity.init();
            
        return () => {
            netlifyIdentity.off("login")
            netlifyIdentity.off("logout")
        }
    }, [])
     netlifyIdentity.logout()
    }
    const passvalue = { user, login, logout }
    return (
        <AuthContext.Provider value={passvalue}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuthContext = () => { return useContext(AuthContext) };


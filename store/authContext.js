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
    const [authReady, setauthReady] = useState(false);
    useEffect(() => {
        netlifyIdentity.on("login", (user) => {
            setuser(user)
            netlifyIdentity.close() //closes netlify login window
        })
        netlifyIdentity.on("logout", () => {
            setuser(null)
        })
        netlifyIdentity.on("init", (user) => {
            setauthReady(true)
            setuser(user)
            console.log('Netlify Identity initialized')
        })
        //init netlify identity connection
            netlifyIdentity.init();

        //we don't need to do this but just for the sack of good practice we off the login and logout events that we are listening above    
        return () => {
            netlifyIdentity.off("login")
            netlifyIdentity.off("logout")
        }
    }, [])
    const login = () => {
        netlifyIdentity.open()
    }
    const logout = () => {
        netlifyIdentity.logout()
    }
    const values = { user, login, logout, authReady }
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuthContext = () => { return useContext(AuthContext) };


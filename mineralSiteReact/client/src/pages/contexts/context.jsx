import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import React, { useContext, useState, useEffect } from "react"
import { auth } from "../../firebase"


const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    // function login(email, password) {
    //     console.log("login function")
    //     return auth.signInWithEmailAndPassword(email, password);
    // }

    async function login(email, password) {
        try {
            return await signInWithEmailAndPassword(auth, email, password)
        } catch (error) {
            console.log("error")
        }
    }

    function logout() {
        return auth.signOut()
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
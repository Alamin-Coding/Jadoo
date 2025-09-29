import { createUserWithEmailAndPassword, onAuthStateChanged  } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../service/firebase/firebase.config";

export const AuthContext = createContext({
    currentUser: null,
    loading: true,
    signup: () => { }
})

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState("alamin");
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (user)=> {
            setCurrentUser(user)
        });

        return ()=> unsubscribe()
    } , [])

    const signup = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
    }

    const value = {
        currentUser,
        loading,
        signup
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider;


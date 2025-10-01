import { createUserWithEmailAndPassword, getRedirectResult, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../service/firebase/firebase.config";
import { GithubAuthProvider } from "firebase/auth/web-extension";

export const AuthContext = createContext({
    currentUser: null,
    loading: true,
    signup: () => { },
    logout: () => { },
    login: () => { },
    gmailLogin: () => { },
    githubLogin: () => { }
})

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            setLoading(false)
        });

        return () => unsubscribe()
    }, [])

    const signup = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        alert("Email verification sent! check your email")
                        // Email verification sent!
                        // ...
                    }).catch((err) => {
                        console.log("Verification failed");

                    })
            })


    }

    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorMessage = error.message;
            });
    }
    const logout = () => {
        signOut(auth)
    }

    const gmailLogin = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const user = result.user;
                console.log(user);
            }).catch((error) => {
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(credential);

                // ...
            });
    }

const githubLogin = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    console.log(token);
    

    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GithubAuthProvider.credentialFromError(error);
    console.log(credential);
    
    // ...
  });
};

    const value = {
        currentUser,
        loading,
        signup,
        logout,
        login,
        gmailLogin,
        githubLogin
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider;


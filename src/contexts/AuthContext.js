import React, { useContext, useState, useEffect } from 'react'
import { auth, firestore_db } from '../firebase'


const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    
    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password).then (credentials => {
            return firestore_db.collection('users').doc(credentials.user.uid).set ({
                tasks: []
            })
        })
    }


    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }  

    function logout(){
        auth.signout()
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
        signup,
        logout
    }

    return (
        <AuthContext.Provider value ={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

 
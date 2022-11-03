import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user,setUser] = useState([])
    const signUp=(email, password)=>
    {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email,password) =>
    {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>
    {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return() =>unSubscribe();

    },[])

    const authInfo = {signUp,login,user}

    return (
        <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
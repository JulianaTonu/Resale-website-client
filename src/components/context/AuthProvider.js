import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';


export const AuthContext =createContext()
const auth =getAuth(app)
export const AuthProvider = ({children}) => {
    const [user ,setUser] =useState(null)
    const [loading ,setLoading]=useState(true)
     
const googleProvider = new GoogleAuthProvider()

// const user={displayName:'tonu'}

//create user
const createUser =(email, password)=>{   
    setLoading(true)  
    return createUserWithEmailAndPassword(auth, email,password)
}

//signIN
const signIn =(email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}


    //googlesignIN
    const signInWithGoogle =()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

  //logout  
  const logout=()=>{
 return signOut(auth)
  }
   //for update profile
   const updateUserProfile =(profile)=>{
    return updateProfile(auth.currentUser, profile)
}


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('currentuser',currentUser)
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    }, [])

  
const authInfo = {user,createUser,signIn,signInWithGoogle,loading,updateUserProfile,logout}

    return (


        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
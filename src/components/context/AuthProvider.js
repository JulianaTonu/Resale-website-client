import React, { createContext } from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';


export const AuthContext =createContext()
const auth =getAuth(app)
export const AuthProvider = ({children}) => {
    
     
const googleProvider = new GoogleAuthProvider()

const user={displayName:'tonu'}

//create user
const createUser =(email, password)=>{     
    return createUserWithEmailAndPassword(auth, email,password)
}

//signIN
const signIn =(email, password)=>{
    
    return signInWithEmailAndPassword(auth, email, password)
}


    //googlesignIN
    const signInWithGoogle =()=>{
        return signInWithPopup(auth, googleProvider)
    }

const authInfo={user,createUser,signIn,signInWithGoogle}

    return (


        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
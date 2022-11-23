import React, { createContext } from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';


export const AuthContext =createContext()
const auth =getAuth(app)
export const AuthProvider = ({children}) => {
    
    
const user={displayName:'tonu'}

//create user
const createUser =(email, password)=>{     
    return createUserWithEmailAndPassword(auth, email,password)
}

const authInfo={user,createUser}

    return (


        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
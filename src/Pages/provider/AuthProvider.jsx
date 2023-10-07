import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({children}) => {
  const [user,setUser] = useState('');
  const [loading,setLoading] = useState(true)
  const createUser = (email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const logOut = () =>{
    setLoading(true)
    return signOut(auth)
  }
  const signIn = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  useEffect(()=>{
   const unSubscribe = onAuthStateChanged(auth,currentUser=>{
      setUser(currentUser)
      setLoading(false)
    });
    return () =>{
      unSubscribe();
    }
  },[])
  const authInfo ={
    createUser,
    logOut,
    user,
    signIn,
    loading
  }
  return (
    <div>
     <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider> 
    </div>
  );
};

export default AuthProvider;
import React, {useContext, useState, useEffect} from 'react'
import { auth } from '../../../Firebase'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export default function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState()

    function register(email, password){
      return auth.createUserWithEmailAndPassword(email, password)
    }

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
            setLoading(false)
            setCurrentUser(user)
        })
        return unsubscribe
    },[])
   

  
    const value = {
        currentUser,
        register
    }

  return (
    <AuthContext.Provider>
        {!loading && children}
    </AuthContext.Provider>
    )
}

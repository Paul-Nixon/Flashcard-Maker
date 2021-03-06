import React, { useState, useEffect } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext({
  addUser: (email, password) => {},
  loginUser: (email, password) => {},
  logoutUser: () => {},
  updateUserEmail: (email) => {},
  updateUserPassword: (password) => {},
})


export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return auth.signOut()
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
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
    addUser: signup,
    loginUser: login,
    logoutUser: logout,
    updateUserEmail: updateEmail,
    updateUserPassword: updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export default AuthContext;
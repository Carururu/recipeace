import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

const App = () => {
  let navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        console.log(user)
        console.log('user ' + user.displayName + ' is signed in ')
        // ...
      } else {
        navigate(`/login`)
        // User is signed out
        // ...
      }
    })
  }, [navigate])

  return (
    <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  )
}

export default App

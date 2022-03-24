import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPages from './pages/LoginPages'

const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPages />} />
    </Routes>
  )
}

export default App

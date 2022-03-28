import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../actions/userActions'

const HomePage = () => {
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <div className='container'>
      HomePage
      <button onClick={logoutHandler}>Logout</button>
    </div>
  )
}

export default HomePage

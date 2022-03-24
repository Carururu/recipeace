import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './LoginPage.css'
import LoginForm from '../components/LoginForm'
import SignUpForm from '../components/SignUpForm'

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className='container'>
      LoginPages
      <Link to='/'>Home</Link>
      {/* 2 columns, 1st col: name and tagline, 2nd col: login form */}
      <h1>recipeace</h1>
      <h2>Find and share your recipe in peace.</h2>
      {isLogin ? <LoginForm /> : <SignUpForm />}
      {/* forgot password */}
      <hr />
      {/* sign up button, and the content of the card will be sign up form, vice versa */}
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Create Account' : 'Login'}
      </button>
    </div>
  )
}

export default LoginPage

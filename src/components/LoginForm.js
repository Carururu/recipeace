import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

const LoginForm = () => {
  let navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        // Signed in
        navigate(`/`)
      })
      .catch((error) => alert(error.message))
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* login */}
        {/* email */}
        <input
          type='email'
          placeholder='Email'
          {...register('email', {
            required: true,
          })}
        />
        {errors.email && 'Field is required'}
        {/* password */}
        <input
          type='password'
          placeholder='Password'
          {...register('password', {
            required: true,
          })}
        />
        {errors.password && 'Field is required'}
        {/* button */}
        <button type='submit'>Log In</button>
      </form>
    </div>
  )
}

export default LoginForm

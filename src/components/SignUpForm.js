import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../firebase'

const SignUpForm = () => {
  let navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: data.username,
        }).then(() => {
          // Profile updated!
          navigate(`/`)
        })
      })
      .catch((error) => alert(error.message))
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        {/* confirm password */}
        {/* username */}
        <input
          type='username'
          placeholder='Username'
          {...register('username', {
            required: true,
          })}
        />
        {errors.username && 'Field is required'}
        {/* signup button */}
        <button type='submit'>SignUp</button>
      </form>
    </div>
  )
}

export default SignUpForm

import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { login } from '../actions/userActions'

const LoginForm = () => {
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    dispatch(login(data.email, data.password))
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

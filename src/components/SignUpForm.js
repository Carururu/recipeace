import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { signup } from '../actions/userActions'

const SignUpForm = () => {
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    dispatch(signup(data.email, data.password, data.username))
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

import React from 'react'
import useForm from './useForm'

function LoginForm() {
    const initialValues= {
        email: "",
        password : ""
    }

    const onSubmit = (values) => {
        console.log("From Submitted:", values)
    }

    const {
        values,
        handleChange,
        handleSubmit,
        resetForm
    } = useForm (initialValues, onSubmit)


  return (
    <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input type='password' name='password' placeholder='Password' value={values.password} onChange={handleChange}></input>
        <br></br>
        <input type='email' name='email' placeholder='email' value={values.email} onChange={handleChange}></input>
        <br></br>
        <button type='submit' >Submit</button>
        <button type='button' onClick={resetForm} >Reset</button>
    </form>
  )
}

export default LoginForm

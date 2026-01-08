import React, { useRef } from 'react'

function UncontrolledForm() {
    const nameRef = useRef();
    const emailRef = useRef();
    // In uncontrolled form, we can set default values using defaultValue or similar

    // Unlike useState, changing the variable value does not cause a full page reload

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Name:", nameRef.current.value)
        console.log("Email:", emailRef.current.value)
    }

  return (
    <form onSubmit={handleSubmit}>
        <h2>Uncontrolled Form</h2>
        <input type="text" ref={nameRef} placeholder='Name' />
        <br/>
        <input type="email" ref={emailRef} placeholder='Email' />
        <br/>
        <button type='submit'>Submit</button>
    </form>

  )
}

export default UncontrolledForm

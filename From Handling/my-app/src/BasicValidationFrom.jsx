import React from 'react'
import {useState} from "react"

function BasicValidationForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(!name || !email){
            setError("Please fill all fields!")
        }else{
            setError("")
            console.log("Form submitted:", {name, email})
            alert("Form submitted successfully")
        }
    }

  return (
    <form onSubmit={handleSubmit} >
        <h2>Basic Validation Form</h2>

        <input type="text" value={name} placeholder='Enter Your Name' onChange={(e)=> setName(e.target.value)} />
        <br/>

        <input type="email" value={email} placeholder='Enter Your email' onChange={(e)=> setEmail(e.target.value)} />
        <br/>

        {error && <p style={{color: "red"}}>{error}</p>}

        <button type='submit' >Submit</button>
    </form>
  )
}

export default BasicValidationForm

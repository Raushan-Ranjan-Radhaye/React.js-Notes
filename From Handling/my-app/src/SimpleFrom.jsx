import { useState } from "react"
function SimpleFrom() {
    const [name,setName] = useState("")
    const [email, setEmail] = useState("")


    const handleSubmit = (e) =>{
        e.preventDefault()//yaha par ham react me default value set hota hai refresh ka usko desible kar rahi hai
        console.log("Name:", name)
        console.log("Email:", email)
    }

  return (
    <from onSubmit={handleSubmit}>
        <h2>React From Example</h2>

        <label htmlFor="">Name:</label>
        <input type="text" value = {name} onChamge ={(e)=>setName(e.target.value)} />
        <br/>

        <label htmlFor="">Email:</label>
        <input type="email" value={email}onChamge ={(e)=> setEmail(e.target.value)}/>
        <br/>

        <button type='submit'>Submit</button>




    </from> 
  )
}

export default SimpleFrom

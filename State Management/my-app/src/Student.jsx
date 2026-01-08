import React, { useState } from 'react'
function Student() {

    const [student, setStudent] = useState({
    name:"jhon",
    grade: "A",
    city: "Delhi"
    })

    const changeCity = () =>{
        setStudent({...student, city: "Mumbai"})
    }

  return (
    <div>
        <h2>Name: {student.name}</h2>
        <p>Grede: {student.grade} </p>
        <h3> City: {student.city} </h3>
        <button onClick={changeCity} >Change City</button>
        <br></br>
    </div>
  )
}

export default Student

import React, { useState } from 'react'

function UserProfile() {
    const [name, setName] = useState('Guest')
    const [age, setAge] = useState(18)//initial value 18

  return (
    <div>
        <h2>Name: {name}</h2>
        <h3> Age: {age} </h3>
        <button onClick={()=> setName("Raushan")}>Change Name</button>
        <br></br>
        {/* click hone par ye value set hoga */}
        <button onClick={()=> setAge(age + 1 )}>Change Age</button>
    </div>
  )
}

export default UserProfile

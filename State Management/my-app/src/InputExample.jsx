import {useState} from 'react'

function InputExample() {
    const [name, setName] = useState ("")

  return (
    <div>
      <input type="text" name="" value={name} id=""onChange={(e)=> setName(e.target.value)} />
      <p>Hello, {name || "Guest"} </p>
    </div>
  )// isime input me run time change hoga 
}

export default InputExample

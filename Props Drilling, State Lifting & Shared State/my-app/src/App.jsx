import React from 'react'
import { useState } from 'react'

function Parent(){
  const [text, setText] = useState("")
  return (
    <div>
      <InputBox onChange={setText} />
      <Display value={text} />
    </div>
  )
  //yayah par ham inka ko varible me store kar ke iska use karegnge
}

function InputBox({onChange}){
  return <input type='text' onChange={(e)=> onChange(e.target.value)}/>
}

function Display({value}){
  return <h3>Typed : {value}</h3>

}



function App() {
  return (
    <div>
      <Parent/>
    </div>
  )
}

export default App


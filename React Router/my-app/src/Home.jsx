import React from 'react'
import { useNavigate } from 'react-router-dom'
        //now we are make a function to click the button yo go the about route


function Home() {

    const navigate = useNavigate();
    const gotoAbout = ()=>{
        navigate('/about')
        //now we are make a function to click the button yo go the about route
    }


  return (
    <div>
        <h2>Welcome to Home Page</h2>
        <button onClick={gotoAbout} >Go To About</button>
    </div>
  )
}

export default Home

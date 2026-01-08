import React from 'react'

function Child({click}) {
    console.log("Chld Render")
  return  <button onClick={click} >Child Button</button>
}

export default React.memo(Child)
// ye check karta hai ki function load huwa hai ki nahi parent wala jo event laga huwa hai

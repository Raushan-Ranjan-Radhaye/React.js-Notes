import React, { useEffect, useState } from 'react'

function First() {
    const [count, setCount] = useState(0)/// inital value iska 0 set hoga
    const [name, setName] = useState("")
    useEffect(() => {
      document.title = `Count:${count} `
        console.log("Component Re-rendered!")
    }, [name, count])


  return (
    <div>
        <h2>Count : {count}</h2>
        <button onClick={()=> setCount(count + 1)} >Increment</button>
        {/* set  count se one one increment hoga*/}
    </div>
  )
}

export default First

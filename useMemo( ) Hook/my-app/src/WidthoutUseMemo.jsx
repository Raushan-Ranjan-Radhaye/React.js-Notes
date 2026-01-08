import React from 'react'
import { useState, useMemo } from 'react'

function WidthoutUseMemo() {
    const [count, setCount] = useState(0)
    const [text, setText] = useState("")

    const result = useMemo(() => {
        console.log("Running expensive calculation")
        let total = 0;
        for(let i =0; i<10000000; i++){
          total +=i;
        }
        return total;
    }, []);
  return (
    <div>
      <h1>Result: {result}</h1>
      <button onClick={()=> setCount(count + 1)} >Increase Count</button>
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
      <p>Count : {count} </p>
    </div>
  )
}

export default WidthoutUseMemo

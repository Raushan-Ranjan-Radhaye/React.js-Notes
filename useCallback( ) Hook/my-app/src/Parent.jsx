import {useState, useCallback} from 'react'
import Child from './Child'


function Parent() {
    const [count, setCount] = useState(0)

    const handleClick = useCallback(() => {
        console.log("Button Clicked")
    },[])

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={ ()=>setCount(count + 1)} >Parent</button>

    <Child click={handleClick} />

    </div>
  )
}

export default Parent

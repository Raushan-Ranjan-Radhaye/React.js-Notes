import {useState} from "react"

function Counter(){
    // starting me jab mera  function call hoga uska count ka value 0 hoga
    const [count, setCount] = useState(0)

    const increase = () => {
        setCount(count + 1)// count increase hoga count hone par
    }

    const decrease = () => {// count decraese hoga count hone par
        setCount(count - 1)
    }



    return(
        <div>
            <h2>Counter {count}</h2>
            <button onClick={increase} >Increase</button>
            <button onClick={decrease} >Decrease</button>
        </div>
    )

}
//useState ka use kar ke kam ye increase count ko set kiya hai jiska value starting me 0 
export default Counter
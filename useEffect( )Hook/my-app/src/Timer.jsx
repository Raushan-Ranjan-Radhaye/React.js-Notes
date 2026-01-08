import React, { useEffect, useState } from 'react'

function Timer() {
    const [seconds, setSeconds] = useState(0)/// inital value iska 0 set hoga

    useEffect(() => {
        const interval = setInterval(()=>{
            setSeconds((prev)=> prev + 1)
        }, 1000)

        return()=>{
            clearInterval(interval)// ye har barrr clean karga Time ko
        }

    }, [])


  return (
    <div>
        <h2>Seconds : {seconds}</h2>
        {/* set  count se one one increment hoga*/}
    </div>
  )
}

export default Timer

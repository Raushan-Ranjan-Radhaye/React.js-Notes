import React from 'react'
import { useEffect, useLayoutEffect } from 'react'

function Test() {

    useEffect(()=> {

    },[])

    useEffect(()=>{
        console.log("UseEffect Message")
    },[])

    useLayoutEffect(()=>{
    console.log("useLayoutEffect Message")
    },[])


  return (
    <div>Test</div>
  )
}

export default Test

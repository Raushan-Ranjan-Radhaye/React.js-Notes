import React from 'react'
import { useState, useEffect, useEffectEvent } from 'react'


function AutoSaveFrom() {
    const [formData, setFormData] = useState({name: "", email:""})

    const logFormData = useEffectEvent(() => {
      console.log("first Data :", formData)
    })

    useEffect(()=>{
        const interval = setInterval(()=>{
          logFormData()
       },1000)
       return()=>clearInterval(interval)
    },[])


  return (
    <form action="">
        <input type="text" placeholder='name' value={formData.name} onChange={e =>setFormData({...formData, name: e.target.value})} />
        <input type="email" name="" id="" value={formData.email} placeholder='Email' onChange={e=> setFormData({...formData, email: e.target.value})} className=""/>
    </form>
  )
}

export default AutoSaveFrom

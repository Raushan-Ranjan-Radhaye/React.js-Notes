import React from 'react'
import {BrowserRouter, Routes, Route, Link, useParams} from "react-router-dom"
import Home from './Home'
import Contact from './Contact'
import About from './About'
import NotFound from './NotFound'
import Products from './Products'
import Phone from './Phone'
import Laptop from './Laptop'

function App(){
  //usePharams ka use kar ke ham route ke ander value pass kar ke browser me print hota hai
  function User(){
    console.log(useParams())
    const { id } = useParams()
    return <h2>User Profile for ID: {id}</h2>
  }


  return (
    <BrowserRouter>
      <nav>
        <Link to='/'>Home</Link>|
        <Link to='/about'>About</Link>|
        <Link to='/contact'>Contact</Link>|
        <Link to='/user/10'>User</Link>|
        <Link to='/products'>Products</Link>|
        <Link to='/phone'>Phone</Link>|
        <Link to="laptop" > Laptop</Link>|
      </nav>

      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/about' element={<About/>} ></Route>
        <Route path='/contact' element={<Contact/>} ></Route>
        <Route path='/user/:id' element={<User/>} ></Route>
        <Route path="*" element={<NotFound/>} />
        <Route path='products' element={<Products/>}>
          {/* yayah par ham router ke ander route bana rahi hai*/}
        {/* Now we are Created a nested route */}
        <Route path='phone' element={<Phone/>} ></Route>
        {/* route ke ander ham (/) nahi dete hai nested route me */}
        <Route path='laptop' element={<Laptop/>}></Route>


        </Route>
        {/* iska use karne se user agar koi yesa route ko serch kaega jo hai hi nahi usko message jo set kiya hai wo show hoga */}


      </Routes>

    </BrowserRouter>
  )
}

export default App


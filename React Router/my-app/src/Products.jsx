import React from 'react'
import { Link, Outlet } from 'react-router-dom'


function Products() {
  return (
    <div>
      <h2>Products Page</h2>
      <nav>
        <Link to="laptop">Laptop</Link>
        <Link to="phone">Phone</Link>
        {/* route ke ander ham (/) nahi dete hai nested route me */}
      </nav>
      <Outlet/>
    </div>
  )
}

export default Products

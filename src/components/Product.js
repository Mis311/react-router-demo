import React from 'react'
import { Link } from 'react-router-dom' 
import { Outlet } from 'react-router-dom'
const Product = () => {
  return (
    <>
    <div>
        <input type="search" placeholder='search'></input>
    </div>
    <nav>
        <Link to="featured-product">Featured</Link>
        <Link to="new-product">New</Link>
    </nav>
    <Outlet />
    </>
  )
}

export default Product
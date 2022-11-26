import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='primary-nav'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/product">Product</NavLink>
        <NavLink to="/users">Users</NavLink>
    </nav>
  )
}

export default Navbar
import React from 'react'
import './Navbar.css'

import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="logo">
            <h2>Be Code</h2>
        </div>
           
            <ul className='navList'>
              <NavLink to='/Home'> <li>Home</li></NavLink>
              <NavLink to='/About'> <li>About</li></NavLink>
              <NavLink to='/Service'> <li>Service</li></NavLink>
              <NavLink to='/Contact'> <li>Contact</li></NavLink>
            </ul>
       

    </nav>
  )
}

export default Navbar
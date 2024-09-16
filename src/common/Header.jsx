import React from 'react'
import './Header.css';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
        <h1 id='h1' className='container-fluid bg-warning text-center py-3'>E-commerce Website React</h1>
        <ul id='ul' className=''>
            <li className='li'><Link className='li' to={'/home'}>Home</Link></li>
            <li className='li'><Link className='li' to={'/product'}>Product</Link></li>
            <li className='li'><Link className='li' to={'/aboutme'}>About Me</Link></li>



        </ul>
    </div>
  )
}

export default Header
import React from 'react'
import { Link } from 'react-router-dom'

import './navbar.css'



const Navbar = () => {
   
    return (
        <div className='navbar'>
            <ul>
                <li>
                    <Link to='/'>Weather Application</Link>
                </li>    
            </ul>
        </div>
    )
}

export default Navbar

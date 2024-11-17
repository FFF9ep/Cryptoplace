import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={logo} alt="" />
            <ul>
                <li>Home</li>
                <li>Feature</li>
                <li>Pricing</li>
                <li>Blog</li>
            </ul>
            <div className="nav-right">
                <select>
                    <option value="usd">USD</option>
                    <option value="euro">EUR</option>
                    <option value="idr">IDR</option>
                </select>
                <button>Sign Up <img src={arrow_icon} alt="" /></button>
            </div>
        </div>
    )
}

export default Navbar

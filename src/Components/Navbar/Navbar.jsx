import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'
import { CoinContext } from '../../Context/CoinContext'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const {setCurrency} = useContext(CoinContext);

    const currencyHandler = (event) => {
        switch (event.target.value){
            case "usd":{
                setCurrency({name: "usd", symbol: "$"})
                break;
            }
            case "eur":{
                setCurrency({name: "eur", symbol: "€"})
                break;
            }
            case "idr":{
                setCurrency({name: "idr", symbol: "Rp"})
                break;
            }
            default: {
                setCurrency({name: "usd", symbol: "$"})
                break;
            }
        }
    }

    return (
        <div className='navbar'>
            <Link to={'/'}>
                <img src={logo} alt="/" className='logo'/>
            </Link>
            <ul>
                <Link to={'/'}>
                    <li>Home</li>
                </Link>
                <li>Feature</li>
                <li>Pricing</li>
                <li>Blog</li>
            </ul>
            <div className="nav-right">
                <select onChange={currencyHandler}>
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

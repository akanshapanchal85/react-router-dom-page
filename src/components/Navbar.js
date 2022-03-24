import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import{FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/logo.png'
import '../styles/navbar.css'

const Navbar = () => {
    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click)
  return (
      <header>
        <nav className='navbar'>
            <div className='logo'>
                <Link to='/'><img src={Logo} alt=""/></Link>
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links'>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/' className='nav-links'>Pricing</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/' className='nav-links'>FAQ</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/' className='nav-links'>Contact</Link>
                </li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{color: '#fff'}} />) :  (<FaBars size={20} style={{color: '#fff'}}/>)}
            </div>
        </nav>
      </header>
  )
}

export default Navbar
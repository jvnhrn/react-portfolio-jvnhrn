import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMenu = () => setClick(false);

    return (
        <>
        <nav className ="navbar"></nav>
        <div className="navbar-container">
            <ul className="nav-menu">
                <li className='nav-logo'>
                    <Link className='nav-logo' onClick={handleClick} to="/">
                        jvnhrn
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-links' onClick={handleClick, closeMenu} to="/Assignement"> 
                    Assignement
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-links' onClick={handleClick} to="/AboutMe">
                        About Me
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-links' onClick={handleClick} to="/Goals">
                        Goals
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-links' onClick={handleClick} to="/Why">
                        Why
                    </Link>
                </li>
            </ul>
        </div>

        </>
    )
}

export default Navbar


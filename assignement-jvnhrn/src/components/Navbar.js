import React, { useState } from 'react';
import { Link } from 'react-router-dom'



function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMenu = () => setClick(false);

    return (
        <>
        <nav className ="navbar"></nav>
        <div className="navbar-container"></div>
            <Link className="navbar-logo" to="/" onClick={handleClick}>jvnhrn</Link>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
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
        </>
    )
}

export default Navbar


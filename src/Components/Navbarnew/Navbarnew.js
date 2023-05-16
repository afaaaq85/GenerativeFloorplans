import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import aubdsNavLogo from '../../assets/img/gfp5.png'
import './Navbarnew.css'
import Banner from '../Banner/Banner'


const Navbarnew = () => {

    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (


        <nav className="navigation">

            <div className="logo">
                <img  src={aubdsNavLogo} alt="" />
            </div>


            <button className="hamburger" onClick={() => {
                setIsNavExpanded(!isNavExpanded);
            }} >
                {/* icon from Heroicons.com */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="white">
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <div
                className={
                    isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                }>
                <ul className='menu'>
                <li className='item'>
                        <Link to='/home' >Home</Link>
                    </li>
                    <li className='item'>
                        <Link to='/features' >Features</Link>
                    </li>
                    <li className='item'>
                        <Link to='/beta'>Beta</Link>
                    </li>
                    <div>
                        <button class="button">Get App</button>
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default Navbarnew

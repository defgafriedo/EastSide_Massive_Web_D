import logo from '../img/logo.png'
import React from 'react';
import './navbarStyles.css'
import { FaSearch } from 'react-icons/fa'
import {Form, Row, Col, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const navBar = () => {
    return (
        <nav>
            <a href=''><img className="logo" src={logo} alt="Logo" /></a>
            <div className="line"></div>
            <div className='search-bar'>
                <FaSearch className="search-icons" />
                <input className="search-input" placeholder='Search' />
            </div>

            <div className="navbar">
                <ul>
                    <li><a href=''>Dashboard</a></li>
                    <li><a href=''>About</a></li>
                    <li><a href=''>List Artist</a></li>
                    <button className="signin-button">Sign In/Sign Up</button>
                </ul>
            </div>

        </nav>
    )
}

export default navBar
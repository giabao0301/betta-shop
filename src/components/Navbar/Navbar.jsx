import React, { useState } from 'react';
import logo from '../assets/logo.png';
import './Navbar.css';
import { FaCartShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function Navbar() {
    const [menu, setMenu] = useState('home');

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="logo" />
                <p>BettaShop</p>
            </div>
            <ul className="nav-menu">
                <li
                    onClick={() => {
                        setMenu('home');
                    }}
                >
                    <Link style={{ textDecoration: 'none', color: menu === 'home' ? '#47d4e5' : '#626262' }} to="/">
                        Home
                    </Link>
                </li>
                <li
                    onClick={() => {
                        setMenu('nemo');
                    }}
                >
                    <Link style={{ textDecoration: 'none', color: menu === 'nemo' ? '#47d4e5' : '#626262' }} to="/nemo">
                        Betta Nemo
                    </Link>
                </li>
                <li
                    onClick={() => {
                        setMenu('galaxy');
                    }}
                >
                    <Link
                        style={{ textDecoration: 'none', color: menu === 'galaxy' ? '#47d4e5' : '#626262' }}
                        to="/galaxy"
                    >
                        Betta Galaxy
                    </Link>
                </li>
                <li
                    onClick={() => {
                        setMenu('halfmoon');
                    }}
                >
                    <Link
                        style={{ textDecoration: 'none', color: menu === 'halfmoon' ? '#47d4e5' : '#626262' }}
                        to="/halfmoon"
                    >
                        Betta Halfmoon{' '}
                    </Link>
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link to="/login">
                    <button>Login</button>
                </Link>
                <Link to="/cart">
                    <FaCartShopping color="#626262" />
                </Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    );
}

export default Navbar;

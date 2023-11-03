import React, { useState } from 'react';
import logo from '../assets/logo.png';
import styles from './Navbar.module.css';
import { FaCartShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function Navbar() {
    const [menu, setMenu] = useState('home');

    return (
        <div className={styles.nav}>
            <div className={styles['nav__logo']}>
                <img src={logo} alt="logo" />
                <p>BettaShop</p>
            </div>
            <ul className={styles['nav__menu']}>
                <li
                    onClick={() => {
                        setMenu('home');
                    }}
                >
                    <Link
                        className={`${styles['nav__menu-item']} ${menu === 'home' && styles['nav__menu-item--active']}`}
                        to="/"
                    >
                        Trang chủ
                    </Link>
                </li>
                <li
                    onClick={() => {
                        setMenu('nemo');
                    }}
                >
                    <Link
                        className={`${styles['nav__menu-item']} ${menu === 'nemo' && styles['nav__menu-item--active']}`}
                        to="/nemo"
                    >
                        Betta Nemo
                    </Link>
                </li>
                <li
                    onClick={() => {
                        setMenu('galaxy');
                    }}
                >
                    <Link
                        className={`${styles['nav__menu-item']} ${
                            menu === 'galaxy' && styles['nav__menu-item--active']
                        }`}
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
                        className={`${styles['nav__menu-item']} ${
                            menu === 'halfmoon' && styles['nav__menu-item--active']
                        }`}
                        to="/halfmoon"
                    >
                        Betta Halfmoon{' '}
                    </Link>
                </li>
            </ul>
            <div className={styles['nav__login-cart']}>
                <Link to="/login">
                    <button>Login</button>
                </Link>
                <Link to="/cart">
                    <FaCartShopping className={styles['nav__cart-icon']} color="#626262" />
                </Link>
                <div className={styles['nav__cart-count']}>0</div>
            </div>
        </div>
    );
}

export default Navbar;

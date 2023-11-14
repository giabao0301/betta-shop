import React, { useRef, useState } from 'react';
import logo from '../assets/images/logo.png';
import { FaCartShopping, FaBars } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';

function Navbar() {
    const [menu, setMenu] = useState('home');
    const [showedNavbar, setShowedNavbar] = useState(false);
    const toggleNavbar = useRef(null);
    const showNavbarHandler = () => {
        toggleNavbar.current.classList.replace('w-0', 'w-full');
        setShowedNavbar(true);
    };
    const closeNavbarHandler = () => {
        toggleNavbar.current.classList.replace('w-full', 'w-0');
        setShowedNavbar(false);
    };
    return (
        <nav className="flex fixed z-10 top-0 justify-between items-center w-full mx-auto py-4 px-8 shadow-lg bg-white">
            <div className="">
                {/* <img src={logo} alt="logo" /> */}
                <p className="text-primary font-bold md:text-4xl  text-3xl">BettaShop</p>
            </div>
            <div
                ref={toggleNavbar}
                className="truncate lg:bg-white bg-slate-200 w-0 lg:flex lg:static absolute lg:min-h-fit min-h-[40vh] lg:mt-0 mt-[62px] right-0 top-[8%] lg:w-auto items-center text-right duration-700"
            >
                <ul className="flex flex-col lg:flex-row lg:items-center lg:gap-[4vw] gap-8 lg:p-3 p-8 text-xl text-dark">
                    <li
                        onClick={() => {
                            setMenu('home');
                        }}
                    >
                        <Link
                            className={`${'list-none font-bold no-underline outline-none'} ${
                                menu === 'home' && 'text-primary'
                            }`}
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
                            className={`${'list-none font-bold no-underline outline-none'} ${
                                menu === 'nemo' && 'text-primary'
                            }`}
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
                            className={`${'list-none font-bold no-underline outline-none'} ${
                                menu === 'galaxy' && 'text-primary'
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
                            className={`${'list-none font-bold no-underline outline-none'} ${
                                menu === 'halfmoon' && 'text-primary'
                            }`}
                            to="/halfmoon"
                        >
                            Betta Halfmoon
                        </Link>
                    </li>
                    <li>
                        <Link to="/login" className="lg:hidden list-none font-bold no-underline outline-none">
                            Đăng nhập
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="flex items-center justify-center text-2xl gap-11 -mt-1">
                <Link to="/login">
                    <Button title="Đăng nhập" className="hidden lg:flex justify-center" />
                </Link>
                <Link to="/cart" className="hidden lg:block relative mr-3">
                    <FaCartShopping className="hover:opacity-80" size={25} color="#626262" />
                    <span className="absolute text-xs -top-2 -right-3 bg-primary text-white rounded-full px-1">0</span>
                </Link>
            </div>
            <div className="absolute right-0 mr-8">
                {showedNavbar ? (
                    <FaTimes
                        className="lg:hidden animate-quickSpin"
                        size={25}
                        color="#626262"
                        onClick={closeNavbarHandler}
                    />
                ) : (
                    <FaBars className="lg:hidden items-center" size={25} color="#626262" onClick={showNavbarHandler} />
                )}
            </div>
        </nav>
    );
}

export default Navbar;

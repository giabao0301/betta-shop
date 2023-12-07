import React, { useContext, useEffect, useRef, useState } from 'react';
import { FaCartShopping, FaBars } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';
import { NavLink, Link } from 'react-router-dom';
import Button from '../UI/Button';
import useCartContext from '../../store/cart-context';

function Navbar() {
    const { items } = useCartContext();

    const [navbarIsShown, setNavbarIsShown] = useState(false);
    const toggleNavbar = useRef(null);
    const showNavbarHandler = () => {
        toggleNavbar.current.classList.replace('w-0', 'w-full');
        setNavbarIsShown(true);
    };
    const closeNavbarHandler = () => {
        toggleNavbar.current.classList.replace('w-full', 'w-0');
        setNavbarIsShown(false);
    };
    return (
        <nav className="flex fixed z-10 top-0 justify-between items-center w-full mx-auto py-4 px-8 shadow-lg bg-white">
            <Link to={'/'}>
                <p className="text-primary font-bold md:text-4xl text-3xl">BettaShop</p>
            </Link>
            <div
                ref={toggleNavbar}
                className="truncate lg:bg-white bg-slate-200 w-0 lg:flex lg:static absolute lg:min-h-fit min-h-[40vh] lg:mt-0 mt-[62px] right-0 top-[8%] lg:w-auto items-center text-right duration-700"
            >
                <ul className="flex flex-col lg:flex-row lg:items-center lg:gap-[4vw] gap-8 lg:p-3 p-8  text-dark">
                    <li>
                        <NavLink
                            className="list-none font-bold no-underline outline-none"
                            onClick={closeNavbarHandler}
                            to="/"
                        >
                            Trang chủ
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="list-none font-bold no-underline outline-none"
                            onClick={closeNavbarHandler}
                            to="/nemo"
                        >
                            Betta Nemo
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="list-none font-bold no-underline outline-none"
                            onClick={closeNavbarHandler}
                            to="/galaxy"
                        >
                            Betta Galaxy
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="list-none font-bold no-underline outline-none"
                            onClick={closeNavbarHandler}
                            to="/halfmoon"
                        >
                            Betta Halfmoon
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/login"
                            className="lg:hidden list-none font-bold no-u onClick={closeNavbarHandler}nderline outline-none"
                        >
                            Đăng nhập
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex items-center justify-center text-2xl gap-11 -mt-1">
                <NavLink to="/login">
                    <Button
                        onClick={closeNavbarHandler}
                        title="Đăng nhập"
                        className="hidden lg:flex justify-center bg-primary text-white"
                    />
                </NavLink>
                <NavLink onClick={closeNavbarHandler} to="/cart" className="hidden lg:block relative mr-3">
                    <FaCartShopping className="hover:opacity-80" size={25} color="#626262" />
                    <span className="absolute text-xs -top-2 -right-3 bg-primary text-white rounded-full px-1">
                        {items.length}
                    </span>
                </NavLink>
            </div>
            <div className="absolute right-0 mr-8">
                {navbarIsShown ? (
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

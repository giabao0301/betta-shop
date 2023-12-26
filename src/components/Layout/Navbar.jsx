import React, { useContext, useEffect, useRef, useState } from 'react';
import { FaCartShopping, FaBars, FaHeart } from 'react-icons/fa6';
import { FaTimes, FaSearch } from 'react-icons/fa';
import { NavLink, Link } from 'react-router-dom';
import Button from '../UI/Button';
import useCartContext from '../../store/cart-context';

function Navbar() {
    const { items } = useCartContext();

    const [navbarIsShown, setNavbarIsShown] = useState(false);
    const toggleNavbar = useRef(null);
    const toggleDropdown = useRef(null);

    const showNavbarHandler = () => {
        toggleNavbar.current.classList.replace('w-0', 'w-full');
        setNavbarIsShown(true);
    };
    const closeNavbarHandler = () => {
        toggleNavbar.current.classList.replace('w-full', 'w-0');
        setNavbarIsShown(false);
    };

    const showDropdownHandler = () => {
        toggleDropdown.current.classList.replace('hidden', 'block');
    };

    const hideDropdownHandler = () => {
        toggleDropdown.current.classList.replace('block', 'hidden');
    };
    return (
        <nav className="flex fixed z-10 top-0 justify-between items-center w-full mx-auto py-4 px-8 shadow-lg bg-white">
            <Link to={'/'}>
                <p className="text-primary font-bold md:text-2xl text-3xl">Betta</p>
            </Link>
            <div
                ref={toggleNavbar}
                className=" ml-8 lg:bg-white bg-slate-200 w-0 lg:flex lg:static absolute lg:min-h-fit min-h-[40vh] lg:mt-0 mt-[62px] right-0 top-[8%] lg:w-auto items-center text-right duration-700"
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
                        <div
                            class="dropdown inline-block relative"
                            onMouseOver={showDropdownHandler}
                            onMouseOut={hideDropdownHandler}
                        >
                            <button class="font-semibold py-2 px-4 rounded inline-flex items-center">
                                <span className="font-bold">Loại cá</span>
                                <svg
                                    class="fill-current h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </button>
                            <ul
                                ref={toggleDropdown}
                                class="hidden dropdown-menu absolute bg-gray-200 text-left min-w-[180px] left-[10%]"
                            >
                                <li className="block p-4">
                                    <NavLink
                                        className="list-none font-bold no-underline outline-none"
                                        onClick={closeNavbarHandler}
                                        to="/nemo"
                                    >
                                        Betta Nemo
                                    </NavLink>
                                </li>
                                <li className="block p-4">
                                    <NavLink
                                        className="list-none font-bold no-underline outline-none"
                                        onClick={closeNavbarHandler}
                                        to="/galaxy"
                                    >
                                        Betta Galaxy
                                    </NavLink>
                                </li>
                                <li className="block p-4">
                                    <NavLink
                                        className="list-none font-bold no-underline outline-none"
                                        onClick={closeNavbarHandler}
                                        to="/halfmoon"
                                    >
                                        Betta Halfmoon
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <NavLink className="list-none font-bold no-underline outline-none" to="/aquarium">
                            Phụ kiện thủy sinh
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="list-none font-bold no-underline outline-none" to="/careguide">
                            Hướng dẫn chăm sóc
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div class="flex flex-1 justify-center items-center">
                <form action="/search" class="max-w-[480px] w-[80%] px-4">
                    <div class="relative">
                        <input
                            type="text"
                            name="q"
                            class="w-full border h-12 shadow p-4 rounded-full focus:outline-none"
                            placeholder="Tìm kiếm"
                        />
                        <button type="submit">
                            <FaSearch class="text-primary h-5 w-5 absolute top-3.5 right-3" />
                        </button>
                    </div>
                </form>
            </div>
            <div className="flex items-center justify-center text-2xl gap-4 -mt-1">
                <NavLink onClick={closeNavbarHandler} to="/wishlist" className="hidden lg:block relative mr-3">
                    <FaHeart className="hover:opacity-80" size={20} color="#626262" />
                    <span className="absolute text-xs -top-2 -right-3 bg-primary text-white rounded-full px-1">0</span>
                </NavLink>
                <NavLink onClick={closeNavbarHandler} to="/cart" className="hidden lg:block relative mr-3">
                    <FaCartShopping className="hover:opacity-80" size={22} color="#626262" />
                    <span className="absolute text-xs -top-2 -right-3 bg-primary text-white rounded-full px-1">
                        {items.length}
                    </span>
                </NavLink>
                <NavLink to="/login">
                    <Button
                        onClick={closeNavbarHandler}
                        title="Đăng nhập"
                        className="hidden lg:flex justify-center bg-primary text-white"
                    />
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
                    <FaBars className="lg:hidden items-center" size={20} color="#626262" onClick={showNavbarHandler} />
                )}
            </div>
        </nav>
    );
}

export default Navbar;

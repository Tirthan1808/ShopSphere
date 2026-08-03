import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className="container">

            <div className="child">

                <nav className="navbar">

                    {/* Logo */}
                    <Link to="/" className="logo">
                        ShopSphere
                    </Link>

                    {/* Font Awesome Icons */}
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
                    />


                    {/* Desktop Menu */}
                    <ul className="navlist">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/categories">Categories</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>


                    {/* Right Side Actions */}
                    <div className="desktop-action">


                        {/* Cart */}
                        <Link to="/cart" className="cart-icon">
                            <i className="fa-solid fa-cart-shopping"></i>
                            <span className="cart-value">0</span>
                        </Link>


                        {/* Sign In */}
                        <Link to="/login" className="btn">
                            Sign In
                            <i className="fa-solid fa-arrow-right"></i>
                        </Link>


                        {/* Hamburger */}
                        <button
                            className="hamburger"
                            onClick={() => setOpenMenu(true)}
                        >
                            <i className="fa-solid fa-bars"></i>
                        </button>


                    </div>



                    {/* Mobile Menu */}

                    <ul className={openMenu ? "mobile-menu active" : "mobile-menu"}>


                        <li>
                            <Link to="/" onClick={() => setOpenMenu(false)}>
                                Home
                            </Link>
                        </li>


                        <li>
                            <Link to="/shop" onClick={() => setOpenMenu(false)}>
                                Shop
                            </Link>
                        </li>


                        <li>
                            <Link to="/categories" onClick={() => setOpenMenu(false)}>
                                Categories
                            </Link>
                        </li>


                        <li>
                            <Link to="/about" onClick={() => setOpenMenu(false)}>
                                About Us
                            </Link>
                        </li>


                        <li>
                            <Link to="/contact" onClick={() => setOpenMenu(false)}>
                                Contact
                            </Link>
                        </li>


                        <li>
                            <Link to="/login" className="btn">
                                Sign In
                            </Link>
                        </li>


                        <li>
                            <button
                                className="close-menu"
                                onClick={() => setOpenMenu(false)}
                            >
                                <i className="fa-solid fa-xmark"></i>
                                Close
                            </button>
                        </li>


                    </ul>


                </nav>

            </div>

        </div>
    );
}
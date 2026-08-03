import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-child">

                <div className="footer-top">

                    {/* Brand */}
                    <div className="footer-brand">
                        <Link to="/" className="logo">
                            ShopSphere
                        </Link>
                        <p className="footer-tagline">
                            Everything you need, delivered with ease.
                        </p>

                        <div className="footer-socials">
                            <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#" aria-label="Twitter"><i className="fa-brands fa-x-twitter"></i></a>
                            <a href="#" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
                        </div>
                    </div>

                    {/* Shop links */}
                    <div className="footer-col">
                        <h4>Shop</h4>
                        <ul>
                            <li><Link to="/shop">All Products</Link></li>
                            <li><Link to="/categories">Categories</Link></li>
                            <li><Link to="/deals">Deals</Link></li>
                            <li><Link to="/new-arrivals">New Arrivals</Link></li>
                        </ul>
                    </div>

                    {/* Company links */}
                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/careers">Careers</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Support links */}
                    <div className="footer-col">
                        <h4>Support</h4>
                        <ul>
                            <li><Link to="/faq">FAQs</Link></li>
                            <li><Link to="/shipping">Shipping & Returns</Link></li>
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                            <li><Link to="/terms">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="footer-col footer-newsletter">
                        <h4>Stay Updated</h4>
                        <p>Subscribe for exclusive offers and updates.</p>
                        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Your email" required />
                            <button type="submit" className="btn">
                                Join <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </form>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} ShopSphere. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <Link to="/privacy">Privacy</Link>
                        <Link to="/terms">Terms</Link>
                        <Link to="/sitemap">Sitemap</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
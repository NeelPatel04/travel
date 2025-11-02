import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const hamburgerRef = useRef(null);
    const mobileMenuRef = useRef(null);

    const toggleMobileMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                hamburgerRef.current &&
                mobileMenuRef.current &&
                !hamburgerRef.current.contains(event.target) &&
                !mobileMenuRef.current.contains(event.target)
            ) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="header">
            <div className="header-left">
                <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Logo" />
                <h1>TrekTales</h1>
            </div>
            <div className="nav">
                <Link to="/">Home</Link>
                <Link to="/destination">Destination</Link>
                <Link to="/blog">Travel Blog</Link>
                <Link to="/bucket-list">Bucket-List</Link>
                <Link to="/about">About</Link>
            </div>
            <div 
                ref={hamburgerRef}
                className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                onClick={toggleMobileMenu}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="login">
                <a href="#">Login</a>
            </div>
            <div 
                ref={mobileMenuRef}
                className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}
                id="mobileMenu"
            >
                <Link to="/" onClick={closeMobileMenu}>Home</Link>
                <Link to="/destination" onClick={closeMobileMenu}>Destination</Link>
                <Link to="/blog" onClick={closeMobileMenu}>Travel Blog</Link>
                <Link to="/bucket-list" onClick={closeMobileMenu}>Bucket-List</Link>
                <Link to="/about" onClick={closeMobileMenu}>About</Link>
            </div>
        </div>
    );
}

export default Header;
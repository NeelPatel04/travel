import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

function Header() {
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
            <div className="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="login">
                <a href="#">Login</a>
            </div>
            <div className="mobile-menu">
                <Link to="/">Home</Link>
                <Link to="/destination">Destination</Link>
                <Link to="/blog">Travel Blog</Link>
                <Link to="/bucket-list">Bucket-List</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
    );
}

export default Header;
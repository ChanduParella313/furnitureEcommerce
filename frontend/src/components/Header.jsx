import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = () => {
    return (
        <header className="header">
            <div className="header-top">
                <p>Free shipping on orders over $39!</p>
            </div>
            <div className="header-nav">
                <Link to="/" className="header-logo">Furniture Store</Link>
                <SearchBar />
                <div className="header-links">
                    <Link to="/account">Account</Link>
                    <Link to="/cart">Cart</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;

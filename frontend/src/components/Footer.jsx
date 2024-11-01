import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <Link to="/contact">Contact Us</Link>
                <Link to="/about">About Us</Link>
                <Link to="/policies">Policies</Link>
            </div>
            <p>&copy; 2023 Furniture Store. All rights reserved.</p>
        </footer>
    );
};

export default Footer;

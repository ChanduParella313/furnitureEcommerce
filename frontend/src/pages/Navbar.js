import React from 'react';
import pmg from '../images/bbb.png';
import { FaSearch } from "react-icons/fa";
import { BsGift } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { BsCart4 } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import './Navbar.css'; // Import a custom CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Row 1 */}
      <div className="navbar-row row1">
        <div className="logo">
        <img 
  src={pmg} 
  alt="Logo" 
  style={{
    width: '100px',
    height: 'auto',
    display: 'inline-block',
    verticalAlign: 'middle',
    cursor: 'pointer'
  }} 
/>
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search"
            className="search-input"
          />
          <button className="search-button">
            <FaSearch/>
          </button>
        </div>
        <div className="right-icons">
          <div className="icon">
          <VscAccount/> {/* Account symbol */}
          </div>
          <div className="icon">
            <CiHeart /> {/* Wishlist */}
          </div>
          <div className="icon">
          <BsGift /> {/* Gift box */}
          </div>
          <div className="icon">
          <BsCart4 /> {/* Cart */}
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="navbar-row row2">
        <ul className="category-menu">
          <li>Furniture</li>
          <li>Rugs</li>
          <li>Bedding</li>
          <li>Bath</li>
          <li>Kitchen</li>
          <li>Decor</li>
          <li>Outdoor</li>
          <li>Home Implementation</li>
          <li>Lighting</li>
          <li>Baby & Kids</li>
          <li>More Ideas</li>
          <li>Sales & Deals</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

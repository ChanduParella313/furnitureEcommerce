import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import pmg from '../images/bbb.png';
import { FaSearch } from "react-icons/fa";
import { BsGift } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { BsCart4 } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import './Navbar.css'; // Import a custom CSS file for styling


const Navbar = () => {

  const [hoveredMenu, setHoveredMenu] = useState(null);

  const menu = {
    Furniture: [
      "Living Room Furniture",
      "Bedroom Furniture",
      "Patio Furniture",
      "Office & Gaming Furniture",
      "Dining, Kitchen & Bar",
      "More",
    ],
    Rugs: ["Area Rugs", "Outdoor Rugs", "Runner Rugs", "Rug Pads"],
    Bedding: ["Sheets", "Comforters", "Pillows", "Duvet Covers"],
    Bath: ["Towels", "Bath Rugs", "Shower Curtains", "Bathroom Accessories"],
    Kitchen: ["Cookware", "Dinnerware", "Appliances", "Storage"],
    Decor: ["Wall Art", "Mirrors", "Clocks", "Vases"],
    Outdoor: ["Outdoor Furniture", "Garden Decor", "Grills"],
    "Home Implementation": ["Storage Solutions", "Cleaning Supplies"],
    Lighting: ["Ceiling Lights", "Table Lamps", "Floor Lamps"],
    "Baby & Kids": ["Nursery Furniture", "Kids Beds", "Toys"],
    "More Ideas": ["Seasonal Decor", "Gift Ideas"],
    "Sales & Deals": ["Daily Deals", "Clearance"],
  };

  return (
    <nav className="navbar">
      {/* Row 1 */}
      <div className="navbar-row row1">
        <div className="logo">
          <Link to="/">
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
/></Link>
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
          <Link to="/profile"><VscAccount/></Link> {/* Account symbol */}
          </div>
          <div className="icon">
            <CiHeart /> {/* Wishlist */}
          </div>
          <div className="icon">
          <BsGift /> {/* Gift box */}
          </div>
          <div className="icon">
          <Link to="/cart"><BsCart4 /> </Link>{/* Cart */}
          </div>
        </div>
      </div>

       {/* Second Row */}
       <div className="navbar-row-2">
        {Object.keys(menu).map((category) => (
          <div
            key={category}
            className="category"
            onMouseEnter={() => setHoveredMenu(category)}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            {category}
            {hoveredMenu === category && (
              <div className="dropdown">
                {menu[category].map((subcategory) => (
                  <div key={subcategory} className="subcategory">
                    {subcategory}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

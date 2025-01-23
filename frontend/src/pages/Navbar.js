import React,{useState} from 'react';
import pmg from '../images/bbb.png';
import { FaSearch } from "react-icons/fa";
import { BsGift } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { BsCart4 } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import './Navbar.css'; // Import a custom CSS file for styling

const Navbar = () => {

  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = {
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

       {/* Second Row */}
       <div className="navbar-row-2">
        {Object.keys(categories).map((category) => (
          <div
            key={category}
            className="category"
            onMouseEnter={() => setHoveredCategory(category)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            {category}
            {hoveredCategory === category && (
              <div className="dropdown">
                {categories[category].map((subcategory) => (
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

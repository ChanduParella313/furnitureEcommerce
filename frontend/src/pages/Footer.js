import React,{useState } from 'react';
import './Footer.css'; // Import custom CSS for styling

const Footer = () => {

    const [selectedCountry, setSelectedCountry] = useState('US');

    const handleCountryChange = (e) => {
      setSelectedCountry(e.target.value);
    };
  
    // Function to get the shipping URL based on the country
    const getShippingUrl = (country) => {
      switch (country) {
        case 'US':
          return 'https://www.bbb.com/us';
        case 'Canada':
          return 'https://www.bbb.com/ca';
        case 'UK':
          return 'https://www.bbb.com/uk';
        case 'Australia':
          return 'https://www.bbb.com/au';
          case 'India':
          return 'https://www.bbb.com/in';
        // Add more countries as needed
        default:
          return 'https://www.bbb.com';
      }
    };
  

  return (
    <footer className="footer">
      <div className="footer-columns">
        {/* Column 1: My Account */}
        <div className="footer-column">
          <h4>My Account</h4>
          <ul>
            <li><a href="/orders-returns">Orders & Returns</a></li>
            <li><a href="/email-preference">Email Preferences</a></li>
            <li><a href="/pro-membership">Pro Membership</a></li>
            <li><a href="/welcome-rewards">Welcome Rewards</a></li>
            <li><a href="/account-settings">Account Settings</a></li>
          </ul>
        </div>

        {/* Column 2: Let's Help */}
        <div className="footer-column">
          <h4>Let's Help</h4>
          <ul>
            <li><a href="/help-center">Help Center</a></li>
            <li><a href="/contact-customer-care">Contact Customer Care</a></li>
            <li><a href="/shipping-information">Shipping Information</a></li>
            <li><a href="/return-policy">Return Policy</a></li>
            <li><a href="/international-help">International Help</a></li>
            <li><a href="/accessibility">Accessibility</a></li>
          </ul>
        </div>

        {/* Column 3: Company Information */}
        <div className="footer-column">
          <h4>Company Information</h4>
          <ul>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/investor-relations">Investor Relations</a></li>
            <li><a href="/sell-your-products">Sell Your Products</a></li>
            <li><a href="/supply-chain-transparency">Supply Chain Transparency</a></li>
          </ul>
        </div>

        {/* Column 4: More Ways */}
        <div className="footer-column">
          <h4>More Ways</h4>
          <ul>
            <li><a href="/deals">Deals</a></li>
            <li><a href="/new-arrivals">New Arrivals</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="copyright">
          © {new Date().getFullYear()} Your Company Name. All Rights Reserved.
        </div>
        <div className="country-selector">
          <label htmlFor="ship-to-country">Ship to:</label>
          <select
            id="country-select"
            value={selectedCountry}
            onChange={handleCountryChange}
          >
            <option value="us">United States</option>
            <option value="ca">Canada</option>
            <option value="uk">United Kingdom</option>
            <option value="au">Australia</option>
            <option value="in">India</option>
          </select>
          <a href={getShippingUrl(selectedCountry)} target="_blank" rel="noopener noreferrer">
            {selectedCountry}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

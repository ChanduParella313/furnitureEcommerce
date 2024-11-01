import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './HomePage.css';

function HomePage() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch featured products
    axios.get('http://localhost:8080/api/products/featured')
      .then(response => {
        setFeaturedProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching featured products:', error);
      });

    // Fetch categories
    axios.get('http://localhost:8080/api/categories')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Bed Bath & Beyond</h1>
          <p>Transform your space with our elegant furniture collection</p>
          <button className="shop-now-btn">Shop Now</button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          {categories.map(category => (
            <div key={category.id} className="category-card">
              <img src={category.imageUrl} alt={category.name} />
              <h3>{category.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {featuredProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.imageUrl} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="category">{product.category}</p>
              <p className="price">${product.price}</p>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* ... (rest of the component remains the same) ... */}

    </div>
  );
}

export default HomePage;
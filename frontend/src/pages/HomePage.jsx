// src/pages/Homepage.js
import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import axios from '../services/api';

const Homepage = () => {
    const [featuredProducts, setFeaturedProducts] = useState([]);

    useEffect(() => {
        // Fetch featured products
        axios.get('/products/featured')
            .then(response => setFeaturedProducts(response.data))
            .catch(error => console.error("Error fetching featured products", error));
    }, []);

    return (
        <div className="homepage">
            <header className="promo-banner">
                <h2>Discover Quality Furniture</h2>
                <p>Upgrade your home with our exclusive deals on furniture collections!</p>
            </header>
            <h3>Featured Products</h3>
            <div className="product-grid">
                {featuredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Homepage;

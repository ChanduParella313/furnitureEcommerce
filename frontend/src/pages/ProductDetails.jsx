// src/pages/ProductDetailsPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../services/api';

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Fetch product details by product ID
        axios.get(`/products/${productId}`)
            .then(response => setProduct(response.data))
            .catch(error => console.error("Error fetching product details", error));
    }, [productId]);

    if (!product) return <p>Loading...</p>;

    return (
        <div className="product-details-page">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p className="product-price">${product.price}</p>
            <p className="product-description">{product.description}</p>
            <button className="add-to-cart-button">Add to Cart</button>
        </div>
    );
};

export default ProductDetails;

import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <Link to={`/product/${product.id}`}>
                <img src={product.imageUrl} alt={product.name} className="product-image" />
                <h4 className="product-name">{product.name}</h4>
            </Link>
            <p className="product-price">${product.price}</p>
            <Link to={`/product/${product.id}`} className="view-details-button">
                View Details
            </Link>
        </div>
    );
};

export default ProductCard;

// src/pages/CategoryPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import axios from '../services/api';

const CategoryPage = () => {
    const { categoryId } = useParams();
    const [categoryProducts, setCategoryProducts] = useState([]);

    useEffect(() => {
        // Fetch products by category ID
        axios.get(`/categories/${categoryId}/products`)
            .then(response => setCategoryProducts(response.data))
            .catch(error => console.error("Error fetching category products", error));
    }, [categoryId]);

    return (
        <div className="category-page">
            <h2>Category Products</h2>
            <div className="product-grid">
                {categoryProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default CategoryPage;

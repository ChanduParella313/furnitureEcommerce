// src/pages/ProductListPage.js
import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import axios from '../services/api';

const ProductListPage = () => {
    const { categoryId } = useParams(); // Optional category filtering
    const [searchParams, setSearchParams] = useSearchParams();
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(categoryId || '');
    const [sortOrder, setSortOrder] = useState(searchParams.get('sort') || 'price-asc');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const itemsPerPage = 12;

    // Fetch categories for filtering
    useEffect(() => {
        axios.get('/categories')
            .then(response => setCategories(response.data))
            .catch(error => console.error("Error fetching categories", error));
    }, []);

    // Fetch products with filters, sorting, and pagination
    useEffect(() => {
        const params = {
            category: selectedCategory,
            sort: sortOrder,
            page,
            limit: itemsPerPage,
        };

        axios.get('/products', { params })
            .then(response => {
                setProducts(response.data.products);
                setTotalPages(response.data.totalPages);
            })
            .catch(error => console.error("Error fetching products", error));
    }, [selectedCategory, sortOrder, page]);

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
        setPage(1);
    };

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
        setPage(1);
    };

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    return (
        <div className="product-list-page">
            <h2>Browse Products</h2>

            <div className="filters">
                {/* Category Filter */}
                <select value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="">All Categories</option>
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>

                {/* Sort Options */}
                <select value={sortOrder} onChange={handleSortChange}>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="popularity">Popularity</option>
                </select>
            </div>

            <div className="product-grid">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {/* Pagination */}
            <div className="pagination">
                <button
                    onClick={() => handlePageChange(page - 1)}
                    disabled={page === 1}
                >
                    Previous
                </button>
                <span>Page {page} of {totalPages}</span>
                <button
                    onClick={() => handlePageChange(page + 1)}
                    disabled={page === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ProductListPage;

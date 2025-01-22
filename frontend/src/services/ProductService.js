// src/services/ProductService.js
import axios from './api';

// Fetch a list of products with optional filters, sorting, and pagination
const fetchProducts = async (category = '', sort = 'price-asc', page = 1, limit = 12) => {
    try {
        const response = await axios.get('/products', {
            params: { category, sort, page, limit },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

// Fetch a single product by ID
const fetchProductById = async (productId) => {
    try {
        const response = await axios.get(`/products/${productId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching product details:', error);
        throw error;
    }
};

// Fetch a list of all categories
const fetchCategories = async () => {
    try {
        const response = await axios.get('/categories');
        return response.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
};

// Exporting all product-related API functions
export default {
    fetchProducts,
    fetchProductById,
    fetchCategories,
};

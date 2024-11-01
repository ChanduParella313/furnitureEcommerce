// src/services/api.js
import axios from 'axios';

// Set the base URL for the API
const api = axios.create({
    baseURL: 'http://localhost:8080/api',  // Update this URL if deployed on a different server
    headers: {
        'Content-Type': 'application/json',
    },
});

// Function to set authorization token for authenticated requests
export const setAuthToken = (token) => {
    if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete api.defaults.headers.common['Authorization'];
    }
};

// Categories API
export const fetchCategories = async () => {
    try {
        const response = await api.get('/categories');
        return response.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
};

// Products API
export const fetchProducts = async (category = '', sort = 'price-asc', page = 1, limit = 12) => {
    try {
        const response = await api.get('/products', {
            params: { category, sort, page, limit },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export const fetchProductById = async (productId) => {
    try {
        const response = await api.get(`/products/${productId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching product details:', error);
        throw error;
    }
};

// Cart API
export const fetchCart = async () => {
    try {
        const response = await api.get('/cart');
        return response.data;
    } catch (error) {
        console.error('Error fetching cart:', error);
        throw error;
    }
};

export const addToCart = async (productId, quantity = 1) => {
    try {
        const response = await api.post('/cart', { productId, quantity });
        return response.data;
    } catch (error) {
        console.error('Error adding to cart:', error);
        throw error;
    }
};

export const updateCartItem = async (productId, quantity) => {
    try {
        const response = await api.put(`/cart/${productId}`, { quantity });
        return response.data;
    } catch (error) {
        console.error('Error updating cart item:', error);
        throw error;
    }
};

export const removeCartItem = async (productId) => {
    try {
        const response = await api.delete(`/cart/${productId}`);
        return response.data;
    } catch (error) {
        console.error('Error removing cart item:', error);
        throw error;
    }
};

// User Authentication API
export const login = async (credentials) => {
    try {
        const response = await api.post('/auth/login', credentials);
        return response.data;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

export const register = async (userData) => {
    try {
        const response = await api.post('/auth/register', userData);
        return response.data;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
};

// Orders API
export const placeOrder = async () => {
    try {
        const response = await api.post('/orders');
        return response.data;
    } catch (error) {
        console.error('Error placing order:', error);
        throw error;
    }
};

export const fetchUserOrders = async () => {
    try {
        const response = await api.get('/orders');
        return response.data;
    } catch (error) {
        console.error('Error fetching user orders:', error);
        throw error;
    }
};

export default api;

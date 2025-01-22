// src/services/CartService.js
import axios from './api';

// Fetch the current cart items for the user
const fetchCart = async () => {
    try {
        const response = await axios.get('/cart');
        return response.data;
    } catch (error) {
        console.error('Error fetching cart:', error);
        throw error;
    }
};

// Add a product to the cart
const addToCart = async (productId, quantity = 1) => {
    try {
        const response = await axios.post('/cart', { productId, quantity });
        return response.data;
    } catch (error) {
        console.error('Error adding to cart:', error);
        throw error;
    }
};

// Update quantity of an existing cart item
const updateCartItem = async (productId, quantity) => {
    try {
        const response = await axios.put(`/cart/${productId}`, { quantity });
        return response.data;
    } catch (error) {
        console.error('Error updating cart item:', error);
        throw error;
    }
};

// Remove an item from the cart
const removeCartItem = async (productId) => {
    try {
        const response = await axios.delete(`/cart/${productId}`);
        return response.data;
    } catch (error) {
        console.error('Error removing cart item:', error);
        throw error;
    }
};

// Exporting all cart-related API functions
export default {
    fetchCart,
    addToCart,
    updateCartItem,
    removeCartItem,
};

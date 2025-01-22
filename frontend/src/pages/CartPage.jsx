// src/pages/CartPage.js
import React, { useEffect, useState } from 'react';
import CartItem from '../components/CartItem';
import axios from '../services/api';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        // Fetch cart items
        axios.get('/cart')
            .then(response => {
                setCartItems(response.data.items);
                setTotal(response.data.total);
            })
            .catch(error => console.error("Error fetching cart items", error));
    }, []);

    const updateQuantity = (productId, quantity) => {
        // Update item quantity in cart
        axios.put(`/cart/${productId}`, { quantity })
            .then(response => {
                setCartItems(response.data.items);
                setTotal(response.data.total);
            })
            .catch(error => console.error("Error updating quantity", error));
    };

    const removeItem = (productId) => {
        // Remove item from cart
        axios.delete(`/cart/${productId}`)
            .then(response => {
                setCartItems(response.data.items);
                setTotal(response.data.total);
            })
            .catch(error => console.error("Error removing item from cart", error));
    };

    return (
        <div className="cart-page">
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cartItems.map(item => (
                        <CartItem 
                            key={item.product.id} 
                            item={item} 
                            updateQuantity={updateQuantity} 
                            removeItem={removeItem} 
                        />
                    ))}
                    <h3>Total: ${total}</h3>
                    <button className="checkout-button">Proceed to Checkout</button>
                </div>
            )}
        </div>
    );
};

export default CartPage;

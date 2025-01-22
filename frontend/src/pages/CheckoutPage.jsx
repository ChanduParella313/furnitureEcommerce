import React, { useEffect, useState } from 'react';
import axios from '../services/api';

const CheckoutPage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        // Fetch cart details for checkout
        axios.get('/cart')
            .then(response => {
                setCartItems(response.data.items);
                setTotal(response.data.total);
            })
            .catch(error => console.error("Error fetching cart for checkout", error));
    }, []);

    const handleCheckout = () => {
        // Process checkout
        axios.post('/checkout')
            .then(() => alert("Checkout successful!"))
            .catch(error => console.error("Error during checkout", error));
    };

    return (
        <div className="checkout-page">
            <h2>Checkout</h2>
            <div className="checkout-items">
                {cartItems.map(item => (
                    <div key={item.product.id} className="checkout-item">
                        <p>{item.product.name} (x{item.quantity})</p>
                        <p>${item.product.price * item.quantity}</p>
                    </div>
                ))}
            </div>
            <h3>Total: ${total}</h3>
            <button className="confirm-checkout-button" onClick={handleCheckout}>
                Confirm and Pay
            </button>
        </div>
    );
};

export default CheckoutPage;

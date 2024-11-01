import React from 'react';

const CartItem = ({ item, updateQuantity, removeItem }) => {
    return (
        <div className="cart-item">
            <h4>{item.product.name}</h4>
            <div className="cart-item-details">
                <p>Price: ${item.product.price}</p>
                <p>Quantity: 
                    <input 
                        type="number" 
                        value={item.quantity} 
                        onChange={(e) => updateQuantity(item.product.id, e.target.value)} 
                        min="1" 
                    />
                </p>
                <p>Total: ${item.product.price * item.quantity}</p>
                <button onClick={() => removeItem(item.product.id)} className="remove-button">Remove</button>
            </div>
        </div>
    );
};

export default CartItem;

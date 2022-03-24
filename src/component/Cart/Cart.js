import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    return (
        <div className='cart'>
            <h1>Order Summary:</h1>
                <p>Selected items: {cart.length}</p>
        </div>
    );
};

export default Cart;
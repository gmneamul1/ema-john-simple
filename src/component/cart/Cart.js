import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const product of cart ){
        total = total + product.price

    }
    
  
    return (
        <div className='Cart' >
             <h4>Order summery:</h4>
        <p>Selected items: {cart.length}</p>
        <p>Total Price : $ {total}</p>
        <p>Total shoping:</p>
        <p>Tax:</p>
        <p>Grand Total:</p>
        </div>
    );
};

export default Cart;
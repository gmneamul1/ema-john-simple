import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = (props) => {
    const {cart, clearcart} = props;
    console.log(cart)
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart ){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
     

    }
    const tax =(total * 10/100).toFixed(2)
    const taxstring = parseFloat(tax)
    const grandTotal = total + shipping + taxstring
  
    return (
        <div className='Cart' >
             <h4>Order summery:</h4>
        <p>Selected items: {quantity}</p>
        <p>Total Price : $ {total}</p>
        <p>Total shoping:$ {shipping}</p>
        <p>Tax:$ {tax}</p>
        <p>Grand Total: {grandTotal.toFixed(2)}</p>
        <button onClick={clearcart}>Clear</button>
        <Link to='/orders'> <button>Reviw Order</button></Link>
        </div>
    );
};

export default Cart;
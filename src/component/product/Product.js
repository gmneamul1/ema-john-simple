import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
//  console.log(props)
 const {handleAddToCart , product} = props
   
    const {name, img, seller, price, ratings} = product;
    // const handleAddToCart= () => {
    //     console.log('click')
    // }
    // console.log(props)
    return (
        <div className='product'>
           
            <img src={img} alt="" />
            <h2>Name:{name}</h2>
            <h2>Price: ${price}</h2>
            <p>manifacturer: {seller}</p>
            <p>Rating: {ratings}</p>
            <button onClick={() =>handleAddToCart(product)} className='cart' ><p className='btn-text'>Add To Cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>  </button>
        </div>
    );
};

export default Product;
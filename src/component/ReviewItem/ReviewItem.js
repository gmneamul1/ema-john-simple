import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import "./ReviewItem.css"
const ReviewItem = ({product, handleRemoveItem}) => {
    const {name, price, quantity, img, shipping,id} = product
    return (
        <div className='review-item'>
           <div>
            
            <img src={img} alt="" />
           </div>
           <div className="review-details-container">
            <div className="review-details">
            <h3 className="review-details">{name}</h3>
            <p className="review-details">Price{price}</p>
            <p className="review-details">Shipping $ {shipping}</p>
            <p className="review-details">Quantity{quantity}</p>
            </div>

            <div className="delete-container">
                <button onClick={() => handleRemoveItem(id)} className='button-delete'>  
                    <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                </button>
            </div>

           </div>
        </div>
    );
};

export default ReviewItem;
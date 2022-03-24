import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'
const Product = ({product,handelAddtoCart}) => {
    const {name,img, seller, price, ratings} = product;
    //const {product,handelAddtoCart} = props;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p><small>{seller}</small></p>
                <p>${price}</p>
                <p>{ratings} stars</p>
            </div>
            <button onClick={() =>handelAddtoCart(product)} className='btn-cart'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;
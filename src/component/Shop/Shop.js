import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

import './Shop.css'
const Shop = () => {
    const [products,setProducts] = useState([])
    const [cart,setCart] = useState([])

    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handelAddtoCart = (product)=>{
        console.log(product);
        const newCart = [...cart, product]  //push
        setCart(newCart);
    }
    return (
        <div className='shop'>
            <div className='card'>
               {
                   products.map(product => <Product 
                    key={product.id}
                    product ={product}
                    handelAddtoCart={handelAddtoCart}
                   ></Product>)
               }
            </div>

            <div className='add-card'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
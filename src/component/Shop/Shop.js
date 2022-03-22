import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

import './Shop.css'
const Shop = () => {
    const [products,setProducts] = useState([])

    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='shop'>
            <div className='card'>
               {
                   products.map(product => <Product 
                    key={product.id}
                    product ={product}
                   ></Product>)
               }
            </div>

            <div className='add-card'><h1>this is 3</h1></div>
        </div>
    );
};

export default Shop;
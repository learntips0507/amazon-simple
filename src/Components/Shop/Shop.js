import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const productData = fakeData.slice(0, 10);
    const [products, setProducts] = useState(productData); 
    const [cart, steCart] = useState([]);

    //console.log(products);
const clickHandelAdd = (product) => {
    const newCart = [...cart, product];
    steCart(newCart);
}

    return (
        <div className="product">
            <div className="single-product">
                    {
                        products.map(product => <Product 
                            clickHandelAdd = {clickHandelAdd}
                            product={product}
                            ></Product>)
                    }

            </div>
            <div className="product-card">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
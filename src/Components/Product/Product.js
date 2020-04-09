import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { name, img, price, seller, stock, category } = props.product;
    console.log(props);
    return (
        <div className="product-items">
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-text">
                <h2>{name}</h2>
                <p>price - {price}</p>
                <p><small>Catagories - {category}</small></p>
                <p>Company - {seller}</p>
                <p><small>Only {stock} left in stock - Order Now</small></p>
                <br />
                <button className="sell-btn" onClick = { () => props.clickHandelAdd(props.product)}> <FontAwesomeIcon icon={faCartPlus} /> Order Now</button>
            </div>

        </div>
    );
};

export default Product;
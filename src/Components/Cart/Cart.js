import React from 'react';

const Cart = (props) => {
    // console.log(props.cart);
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const count = cart[i];
        total = total + count.price;
    }
    const totalFixNumber = total.toFixed(2); 
    let shiping = 0;
    if (total > 35) {
        shiping = 0;
    } else if (total > 15) {
        shiping = 4.50;
    } else if (total > 0) {
        shiping = 12.50;
    }
    const tex = Math.round(total / 5);
    const fixNumber = (total + shiping + tex).toFixed(2);
    return (
        <div>
            <h2>This is Cart.</h2>
            <h4>Order Summery : {cart.length}</h4>
            <p>Price = {totalFixNumber}</p>
            <p>Shiping Cost = {shiping}</p>
            <p>VAT + Tex = {tex} </p>
            <p>Total Price = {fixNumber}</p>
        </div>
    );
};

export default Cart;
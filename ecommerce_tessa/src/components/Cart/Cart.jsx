import React from "react";
import './Cart.css';
import { useCartContext } from "../CartContext/CartContext";

const Cart = () => {
    const {products} = useCartContext();
    console.log(products);
    return(
        <div>
            <h1>Cart</h1>
            {products.map((p,i)=>(<div className="cartCard">
                <p>#{i+1}</p>
                <p>{p.destino}</p>
                <p>{p.quantity}</p>
                <p>{p.precio}</p>
                </div>)
            )}
        </div>
    );
}   

export default Cart;
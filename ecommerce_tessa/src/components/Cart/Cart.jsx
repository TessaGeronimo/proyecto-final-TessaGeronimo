import React, { useEffect } from "react";
import './Cart.css';
import { useCartContext } from "../CartContext/CartContext";

const Cart = () => {
    const {products, clear, removeItem} = useCartContext();

    return(
        <div>
            <h1>Cart</h1>
            <button onClick={()=>clear()}>Vaciar carrito</button>
            {products.map((p,i)=>(<div className="cartCard">
                <p>#{i+1}</p>
                <p>{p.destino}</p>
                <p>{p.quantity}</p>
                <p>{p.precio}</p>
                <button onClick={() => removeItem(p.id)}>Eliminar</button>
                </div>)
            )}            
        </div>
    );
}   

export default Cart;
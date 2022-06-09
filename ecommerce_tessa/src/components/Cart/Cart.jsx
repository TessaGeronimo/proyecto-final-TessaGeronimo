import React, { useEffect } from "react";
import './Cart.css';
import { useCartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const {products, clear, removeItem,totalAmount,quantityOfItems} = useCartContext();

    useEffect(()=>{
        console.log(totalAmount())
    },[])

    return(
        <div>
            {quantityOfItems()===0?
                <div className="total">
                    <p>No hay elementos en el carrito</p>
                    <Link to={'/'}>Volver al inicio</Link>
                </div>:
                <>
                <button className="btn" onClick={()=>clear()}>Vaciar carrito</button>    
                {products.map((p,i)=>(<div className="cartCard">
                    <p>#{i+1}</p>
                    <p className="categoria">{p.categoria}</p>
                    <p>{p.destino}</p>
                    <p>{p.quantity}</p>
                    <p>{p.precio}</p>
                    <button className="btn-eliminar" onClick={() => removeItem(p.id)}>Eliminar</button>
                    </div>)
                )}
                    
                <div className="total">
                    <p>Total ${totalAmount()}</p>
                </div>
                <div>
                    <Link className="btn" to= {'/userData'}>Finalizar Compra</Link>
                </div>
                </>
            }
        </div>
    );
}   

export default Cart;
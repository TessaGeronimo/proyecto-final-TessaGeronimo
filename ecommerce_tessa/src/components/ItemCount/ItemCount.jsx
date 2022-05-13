import React, { useState } from 'react';
import './ItemCount.css';
import {Link} from 'react-router-dom';


const ItemCount = (props) => {
    const [cant, setCant] = useState(props.inicial);
    const [cartCant, setCartCant] = useState(0);
   
    const handleAdd = () =>{
        if(cant<props.stock){
            setCant(cant+1);
        }
    }

    const handleMinus = () =>{
        if(cant>0){
            setCant(cant-1);
        }    
    }

    const handleCartCant = () => {
        setCartCant(cant);
    }

    return (
        <div className="iccard">
            <div className='amount'>
                <button onClick={() => {handleMinus()}}>-</button>
                <input readOnly value={cant}></input>
                <button onClick={()=>{handleAdd()}}>+</button>
            </div>
            {cartCant===0? 
                <button id='icadd' onClick={()=>{handleCartCant()}}>Agregar al carrito</button>:
                <button id='icadd' onClick={()=>{props.onAdd(cartCant)}}>Terminar compra</button>
            }               
            {/* <Link to='/cart'><button id='icadd' onClick={()=>{props.onAdd(cartCant)}}>Terminar compra</button></Link> */}
            {/* <button onClick={() => props.onAdd(cant)}>
                 Agregar al carrito
            </button>  */}
        </div>
    );
};

export default ItemCount;
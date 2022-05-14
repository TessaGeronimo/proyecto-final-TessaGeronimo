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
            {cartCant===0? 
                <>
                <div className='amount'>
                    <button onClick={() => {handleMinus()}}>-</button>
                    <input readOnly value={cant}></input>
                    <button onClick={()=>{handleAdd()}}>+</button>
                </div>
                <button id='icadd' onClick={()=>{handleCartCant()}}>Agregar al carrito</button>
                </>:
                <Link to='/cart' id='icadd' onClick={()=>{props.onAdd(cartCant)}}>Ver carrito</Link>
            }                       
        </div>
    );
};

export default ItemCount;
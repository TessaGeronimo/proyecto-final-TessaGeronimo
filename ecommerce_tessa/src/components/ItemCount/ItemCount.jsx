import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = (props) => {
    const [cant, setCant] = useState(props.inicial);

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

    const handleAddOn = () =>{
        alert("Se agrego al carrito "+cant+" viaje")
    }

    return (
        <div className="card">
            <h2>Viaje</h2>
            <div className='amount'>
                <button onClick={() => {handleMinus()}}>-</button>
                <input readOnly value={cant}></input>
                <button onClick={()=>{handleAdd()}}>+</button>
            </div>
            <button id='add' onClick={()=>{handleAddOn()}}>Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;
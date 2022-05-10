import React, { useEffect, useState } from 'react';
import './ItemCount.css';
import {Link} from 'react-router-dom';

const ItemCount = (props) => {
    const [cant, setCant] = useState(props.inicial);
    const [onAdd, setOnAdd] = useState(0);

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

    useEffect(() => {
        console.log(onAdd)
    },[onAdd])

    const handleAddOn = () =>{
        setOnAdd(cant);
        alert("Se agrego al carrito "+cant+" viaje");
    }

    return (
        <div className="card">
            <div className='amount'>
                <button onClick={() => {handleMinus()}}>-</button>
                <input readOnly value={cant}></input>
                <button onClick={()=>{handleAdd()}}>+</button>
            </div>
            {onAdd===0? 
            <button id='add' onClick={()=>{handleAddOn()}}>Agregar al carrito</button>:
            <Link id='add' to='/cart'>Terminar compra</Link>}        
        </div>
    );
};

export default ItemCount;
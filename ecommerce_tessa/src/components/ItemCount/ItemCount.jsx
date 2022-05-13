import React, { useState } from 'react';
import './ItemCount.css';
import {Link} from 'react-router-dom';


const ItemCount = (props) => {
    const [cant, setCant] = useState(props.inicial);
    const [onAdd, setOnAdd] = useState(props.onAdd);
   
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

    // useEffect(() => {
        
    // },[onAdd])

    const handleAddOn = () =>{
        setOnAdd(cant);
    }


    

    return (
        <div className="iccard">
            <div className='amount'>
                <button onClick={() => {handleMinus()}}>-</button>
                <input readOnly value={cant}></input>
                <button onClick={()=>{handleAdd()}}>+</button>
            </div>
            {onAdd===0? 
            <button id='icadd' onClick={()=>{handleAddOn()}}>Agregar al carrito</button>:
            <Link to='/cart'><button id='icadd'>Terminar compra</button></Link>}        
        </div>
    );
};

export default ItemCount;
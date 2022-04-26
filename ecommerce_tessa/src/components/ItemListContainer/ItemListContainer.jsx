import React from "react";
import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = (props) =>{
    return(
        <div className='item'>
            <h1>{props.greetings}</h1>
            <ItemCount stock={3} inicial={1} onAdd={0}></ItemCount>  
        </div>
    );
}

export default ItemListContainer;
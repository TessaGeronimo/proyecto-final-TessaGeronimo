import React from "react";
import './ItemListContainer.css';
// import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = (props) =>{
    return(
        <div className='item'>
            <h1>{props.greetings}</h1>
            {/* <ItemCount stock={3} inicial={1} onAdd={0}></ItemCount>   */}
            <ItemList></ItemList> 
            
        </div>
    );
}

export default ItemListContainer;
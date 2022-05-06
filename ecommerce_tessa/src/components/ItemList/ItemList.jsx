import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';

const ItemList = ({vuelos}) => {

    return(
        <div className='list-item'>
            {vuelos.map((vuelo, i) => <Item vuelo={vuelo} key={vuelo.id} />)}
        </div>
    );
};

export default ItemList;
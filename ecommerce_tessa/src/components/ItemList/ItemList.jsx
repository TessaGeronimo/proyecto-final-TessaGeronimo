import React from 'react';
import Item from '../Item/Item';

const prueba = [
    {
    id:1,
    nombre:'Geronimo',
    apellido: 'tessa'
    },
    {
    id:2,
    nombre:'buji',
    apellido: 'tessa'
    },
    {
    id:3,
    nombre:'muna',
    apellido: 'tessa'
    }
]


const ItemList = () => {
    return(
        <div>
        {prueba.map(p =>  <Item nombre = {p.nombre}></Item>) }

        </div>
    );
};

export default ItemList;
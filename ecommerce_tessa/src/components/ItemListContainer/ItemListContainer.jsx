import React, {useEffect, useState} from "react";
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import db from '../../firebase/firebase';
import { collection, getDocs, query, where } from "firebase/firestore";

/* const getVuelos = (categoria) => {
    const myPromise = new Promise((resolve, reject) => {
        const vuelosList = [
            {
                id:1,
                destino:'Barcelona',
                categoria:'vuelos',
                precio: 90000,
                imageUrl:'https://images.adsttc.com/media/images/5ff4/88a7/63c0/17cd/f900/0527/medium_jpg/shutterstock_397537417.jpg?1609861261'
            },
            {
                id:2,
                destino:'Paris',
                categoria:'vuelos',
                precio: '$70000',
                imageUrl:'https://i0.wp.com/hipertextual.com/wp-content/uploads/2013/04/Paris.jpg?w=1024&quality=50&strip=all&ssl=1'
            },
            {
                id:3,
                destino:'Londres',
                categoria:'vuelos',
                precio: 80000,
                imageUrl:'https://resizer.glanacion.com/resizer/Ug6L5UfHTETFMxSKy6P5hfP5m58=/1920x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/HGNP4GG2WFAZHKAI2NU4Q54W5Y.jpg'
            },
            {
                id:4,
                destino:'Hotel Barcelona',
                descripcion: 'Estadía en Hotel Barcelona para 2 Personas.',
                categoria:'alojamientos',
                precio: 9000,
                imageUrl:'https://images.adsttc.com/media/images/5ff4/88a7/63c0/17cd/f900/0527/medium_jpg/shutterstock_397537417.jpg?1609861261'
            },
            {
                id:5,
                destino:'Hotal Paris',
                descripcion: 'Estadía en Hotel Paris para 2 Personas.',
                categoria:'alojamientos',
                precio: 7000,
                imageUrl:'https://i0.wp.com/hipertextual.com/wp-content/uploads/2013/04/Paris.jpg?w=1024&quality=50&strip=all&ssl=1'
            },
            {
                id:6,
                destino:'Londres',
                descripcion: 'Estadía en Hotel Londres para 2 Personas.',
                categoria:'alojamientos',
                precio: 8000,
                imageUrl:'https://resizer.glanacion.com/resizer/Ug6L5UfHTETFMxSKy6P5hfP5m58=/1920x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/HGNP4GG2WFAZHKAI2NU4Q54W5Y.jpg'
            },
            {
                id:7,
                destino:'Camp Nou',
                descripcion: 'Vale para dos personas',
                categoria:'actividades',
                precio: 900,
                imageUrl:'https://images.adsttc.com/media/images/5ff4/88a7/63c0/17cd/f900/0527/medium_jpg/shutterstock_397537417.jpg?1609861261'
            },
            {
                id:8,
                destino:'Torre Eiffel',
                descripcion: 'Vale para dos personas',
                categoria:'actividades',
                precio: 700,
                imageUrl:'https://i0.wp.com/hipertextual.com/wp-content/uploads/2013/04/Paris.jpg?w=1024&quality=50&strip=all&ssl=1'
            },
            {
                id:9,
                destino:'London Eye',
                descripcion: 'Vale para dos personas',
                categoria:'actividades',
                precio: 800,
                imageUrl:'https://resizer.glanacion.com/resizer/Ug6L5UfHTETFMxSKy6P5hfP5m58=/1920x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/HGNP4GG2WFAZHKAI2NU4Q54W5Y.jpg'
            },
        ];
      const vuelosListFiltrado = categoria ? vuelosList.filter(v => v.categoria === categoria) : vuelosList;  
      setTimeout(() => {
        resolve(vuelosListFiltrado);
      }, 2000);
    });
    return myPromise;
  } */

  const getVuelos = (categoria) =>{
      
    const itemCollection = collection(db,'items');
    
    const q = categoria? query(itemCollection, where('categoria','==',categoria)): itemCollection;

    return getDocs(q);
  }

  const ItemListContainer = (props) =>{

    const [vuelos, setVuelos] = useState([]);  
    const {categoria} = useParams();

    useEffect(() => {
        getVuelos(categoria)
          .then(res => {
              setVuelos(res.docs.map(doc => {return {...doc.data(),id: doc.id}}));
          })
    }, [categoria]);

    return(
        <div className='item'>
            <h1>{props.greetings}</h1>
            <div className="cards">
                <ItemList vuelos={vuelos}></ItemList> 
            </div>
        </div>
    );
}

export default ItemListContainer;
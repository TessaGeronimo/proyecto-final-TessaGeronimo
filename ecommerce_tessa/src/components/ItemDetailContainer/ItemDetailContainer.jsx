import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import './ItemDetailContainer.css'

function getDetail(id) {
    const myPromise = new Promise((resolve, reject) => {
        const vuelosList = [
            {
                id:1,
                destino:'Barcelona',
                descripcion: 'Salida desde Buenos Aires clase Ejecutiva',
                precio: '$90000',
                imageUrl:'https://images.adsttc.com/media/images/5ff4/88a7/63c0/17cd/f900/0527/medium_jpg/shutterstock_397537417.jpg?1609861261',
                stock:10
            },
            {
                id:2,
                destino:'Paris',
                descripcion: 'Salida desde Buenos Aires clase Ejecutiva',
                precio: '$70000',
                imageUrl:'https://i0.wp.com/hipertextual.com/wp-content/uploads/2013/04/Paris.jpg?w=1024&quality=50&strip=all&ssl=1',
                stock:7
            },
            {
                id:3,
                destino:'Londres',
                descripcion: 'Salida desde Buenos Aires clase Ejecutiva',
                precio: '$80000',
                imageUrl:'https://resizer.glanacion.com/resizer/Ug6L5UfHTETFMxSKy6P5hfP5m58=/1920x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/HGNP4GG2WFAZHKAI2NU4Q54W5Y.jpg',
                stock:6
            },
            {
                id:4,
                destino:'Hotel Barcelona',
                descripcion: 'Estadía en Hotel Barcelona para 2 Personas.',
                precio: '$9000',
                imageUrl:'https://images.adsttc.com/media/images/5ff4/88a7/63c0/17cd/f900/0527/medium_jpg/shutterstock_397537417.jpg?1609861261',
                stock:11
            },
            {
                id:5,
                destino:'Hotal Paris',
                descripcion: 'Estadía en Hotel Paris para 2 Personas.',
                precio: '$7000',
                imageUrl:'https://i0.wp.com/hipertextual.com/wp-content/uploads/2013/04/Paris.jpg?w=1024&quality=50&strip=all&ssl=1',
                stock:8
            },
            {
                id:6,
                destino:'Londres',
                descripcion: 'Estadía en Hotel Londres para 2 Personas.',
                precio: '$8000',
                imageUrl:'https://resizer.glanacion.com/resizer/Ug6L5UfHTETFMxSKy6P5hfP5m58=/1920x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/HGNP4GG2WFAZHKAI2NU4Q54W5Y.jpg',
                stock:3
            },
            {
                id:7,
                destino:'Camp Nou',
                descripcion: 'Vale para dos personas',
                precio: '$900',
                imageUrl:'https://images.adsttc.com/media/images/5ff4/88a7/63c0/17cd/f900/0527/medium_jpg/shutterstock_397537417.jpg?1609861261',
                stock:12
            },
            {
                id:8,
                destino:'Torre Eiffel',
                descripcion: 'Vale para dos personas',
                precio: '$700',
                imageUrl:'https://i0.wp.com/hipertextual.com/wp-content/uploads/2013/04/Paris.jpg?w=1024&quality=50&strip=all&ssl=1',
                stock:10
            },
            {
                id:9,
                destino:'London Eye',
                descripcion: 'Vale para dos personas',
                precio: '$800',
                imageUrl:'https://resizer.glanacion.com/resizer/Ug6L5UfHTETFMxSKy6P5hfP5m58=/1920x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/HGNP4GG2WFAZHKAI2NU4Q54W5Y.jpg',
                stock:14
            },
        ];
        const vuelo = id ? vuelosList.filter(v => v.id === parseInt(id)) : vuelosList;  
        setTimeout(() => {
            resolve(vuelo[0]);
      }, 2000);
    });
    return myPromise;
}

function ItemDetailContainer() {
    const [vueloDetail, setVueloDetail] = useState({});
    const {id} = useParams();

    useEffect(() => {
        getDetail(id)
            .then(res => {
                setVueloDetail(res);
            })
    }, [id]);

    return (
        <div className='detail'>
            <ItemDetail vueloDetail={vueloDetail} />
        </div>
    )
}

export default ItemDetailContainer
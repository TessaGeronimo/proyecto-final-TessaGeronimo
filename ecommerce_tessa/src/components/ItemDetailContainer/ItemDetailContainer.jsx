import React, { useEffect, useState } from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import './ItemDetailContainer.css'

function getDetail() {
    const myPromise = new Promise((resolve, reject) => {
        const vuelosList = [
            {
                id:1,
                destino:'Barcelona',
                descripcion: 'Salida desde Buenos Aires clase Ejecutiva',
                precio: '$90000',
                imageUrl:'https://images.adsttc.com/media/images/5ff4/88a7/63c0/17cd/f900/0527/medium_jpg/shutterstock_397537417.jpg?1609861261'
            },
            {
                id:2,
                destino:'Paris',
                descripcion: 'Salida desde Buenos Aires clase Ejecutiva',
                precio: '$70000',
                imageUrl:'https://i0.wp.com/hipertextual.com/wp-content/uploads/2013/04/Paris.jpg?w=1024&quality=50&strip=all&ssl=1'
            },
            {
                id:3,
                destino:'Londres',
                descripcion: 'Salida desde Buenos Aires clase Ejecutiva',
                precio: '$80000',
                imageUrl:'https://resizer.glanacion.com/resizer/Ug6L5UfHTETFMxSKy6P5hfP5m58=/1920x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/HGNP4GG2WFAZHKAI2NU4Q54W5Y.jpg'
            },
        ];
        setTimeout(() => {
            resolve(vuelosList[0]);
      }, 2000);
    });
    return myPromise;
}

function ItemDetailContainer() {
    const [vueloDetail, setVueloDetail] = useState([]);
    

    useEffect(() => {
        getDetail()
            .then(res => {
                setVueloDetail(res);
            })
    }, []);

    return (
        <div className='detail'>
            <ItemDetail vueloDetail={vueloDetail} />
        </div>
    )
}

export default ItemDetailContainer
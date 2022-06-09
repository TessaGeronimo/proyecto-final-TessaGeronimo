import React, { useState } from "react";
import { useCartContext } from "../CartContext/CartContext";
import './UserData.css';
import { collection, addDoc} from "firebase/firestore";
import db from '../../firebase/firebase';
import { Link } from "react-router-dom";

const UserData = () => {
    
    const [idVenta, setIdVenta] = useState(0);

    const [buyer, setBuyer] = useState({
        Nombre: '',
        Apellido:'',
        Email: '',
        Telefono: ''
    });

    const {Nombre, Apellido, Email, Telefono} = buyer;

    const {products, totalAmount, clear} = useCartContext();

    const handleInputChange = (e) =>{
        setBuyer(({
            ...buyer,
            [e.target.name]:e.target.value
        }));
    }

    const generarVenta = async(data) => {       
        try {
            const col = collection(db,"Ventas")
            const venta = await addDoc(col,data) 
            setIdVenta(venta.id)
            clear()            
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const fecha = new Date();
        const items = products.map((e)=> {return {id:e.id,title:e.destino,price:e.precio,amount:e.quantity}})
        const total = totalAmount();
        const data = {buyer,items,fecha, total};
        generarVenta(data);
    }
    
    return(
        <>  
            {idVenta===0?
            <div>
                <form className="udcontainer" onSubmit={handleSubmit}>
                    <input type= 'text' name='Nombre' placeholder="Nombre" value={Nombre} onChange={handleInputChange} required></input>
                    <input type= 'text' name='Apellido' placeholder="Apellido" value={Apellido} onChange={handleInputChange} required></input>
                    <input type= 'number' name='Telefono' placeholder="Telefono" value={Telefono} onChange={handleInputChange} required></input>
                    <input type= 'email' name= 'Email' placeholder="e-mail" value={Email} onChange={handleInputChange} required></input>
                    <button type="submit">Terminar Compra</button>
                </form>
            </div>:
            <div>
                <h4>Ya tenés tu CoderViaje!!</h4>
                <h4>{`Tú código de compra es: ${idVenta}`}</h4>
                <Link to="/"><h5>Volver al inicio</h5></Link>    
            </div>
            }
        </>
    );
}

export default UserData;

{/*
    idVenta&&(
        <div>
            <h4>Ya tenés tu CoderViaje!!</h4>
            <h4>{`Tú código de compra es: ${idVenta}`}</h4>
            <Link to="/"><h5>Volver al inicio</h5></Link>
        </div>
        )
    */}
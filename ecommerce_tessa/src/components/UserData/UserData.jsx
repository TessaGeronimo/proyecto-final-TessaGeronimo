import React from "react";

const UserData = () => {

    console.log('aca');
    return(
        <div>
            <input type= 'text' placeholder="Nombre"></input>
            <input type= 'text' placeholder="Apellido"></input>
            <input type= 'number' placeholder="Celular"></input>
            <input type= 'email' placeholder="e-mail"></input>
            <button>Terminar Compra</button>
        </div>
    );
}

export default UserData;
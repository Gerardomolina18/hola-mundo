import React, { useState } from 'react';
import ComponenteB from './componentsB';

class Contacto {
    constructor(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.conectado = false;
    }
}

function ComponenteA() {
    const [contacto] = useState(new Contacto('Juan', 'Pérez', 'juan.perez@email.com'));

    return (
    <div>
        <h2>Componente A</h2>
        <ComponenteB contacto={contacto} />
    </div>
    );
}

export default ComponenteA;

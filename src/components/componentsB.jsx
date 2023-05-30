import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ComponenteA from './componentsA';

function ComponenteB({ contacto }) {
    const [conectado, setConectado] = useState(contacto.conectado);

    const toggleConectado = () => {
    setConectado(!conectado);
    };

    return (
    <div>
    <h3>Componente B</h3>
    <p>{conectado ? 'Contacto En Línea' : 'Contacto No Disponible'}</p>
    <button onClick={toggleConectado}>{conectado ? 'Desconectar' : 'Conectar'}</button>
    <ComponenteA />
    </div>
    );
    }

    ComponenteB.propTypes = {
    contacto: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    conectado: PropTypes.bool.isRequired,
    }).isRequired,
};

export default ComponenteB;

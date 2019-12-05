import React from 'react'
import { conditionalExpression } from '@babel/types';

const Date = ({date}) => (
    <div className="media mt-3">
        <div className="media-body">
            <h3 className="mt-0">{date.mascota}</h3>
            <p className="card-text"><span>Nombre Dueño: </span>{date.propietario}</p>
            <p className="card-text"><span>Fecha: </span>{date.fecha}</p>
            <p className="card-text"><span>Hora: </span>{date.hora}</p>
            <p className="card-text"><span>Sintomas: </span></p>
            <p className="card-text">{date.sintomas}</p>
        </div>
    </div>
);

export default Date;
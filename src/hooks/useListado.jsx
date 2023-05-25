import React from 'react';
import {hel} from '../components';

export const useListado = (arreglo) => {
    
    const ListadoSolicitud = () => (
        arreglo.map(item => (
            item?.aceptado &&
            <div 
                key={item._id}
                className='bg-gray-300 border-gray-400 mb-4 p-3 rounded-2xl border-2 md:flex md:justify-between md:p-6'
            >
                <p className='block font-bold mb-2 md:mb-0'>Tipo de Evento :<span className='block font-normal'>{item.evento}</span></p> 
                <p className='block font-bold mb-2 md:mb-0'>Solicitud de Musica: <span className='block font-normal'>{item.musica}</span></p>
                <p className='block font-bold mb-2 md:mb-0'>Fecha del Evento: <span className='block font-normal'>{hel.formatoFecha(item.fecha)}</span> </p>
            </div>
        ))
    );

    return [ListadoSolicitud];
}

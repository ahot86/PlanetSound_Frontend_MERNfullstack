 import React from 'react';
 import { hel } from '../components';
 import imagenDJ from '../img/dj_avatar.png';
 
 export const useFilterList = (lista, fn) => {

   const FilterLists = () => (
        lista.map((item) => (
            <div
                key={item._id}
                className='mt-6 md:grid md:grid-cols-2 lg:mt-0 lg:grid-cols-1'
            >
                <div>
                    {item.avatar?.data ? (
                        <img src={fn(item.avatar)} className='object-cover h-52 lg:h-80 md:w-full'/>
                    ) : (
                        <div className='bg-gray-400 p-8 h-[14rem] md:flex md:flex-col md:justify-center lg:h-[20rem]'>
                            <p className='text-white uppercase font-bold text-center'>Sin Foto</p>
                            <div className='mx-auto border-white border-2 rounded-full p-4 h-32 w-32 lg:h-52 lg:w-52'>
                                <img src={imagenDJ} className='mx-auto'/>
                            </div>
                        </div>
                    )}
                </div>
                <div 
                    className= {`${item.aceptado ? 'bg-violet-200' : 'bg-gray-300'} p-3 lg:flex lg:justify-between md:p-6`}>
                    <div>
                        <p className='block font-bold mb-2'> Nombre del Dj : <span className=' lg:block font-normal'>{item.nombre}</span></p>
                        <p className='block font-bold mb-2'> Evento : <span className=' lg:block font-normal'>{item.evento}</span></p>
                        <p className='block font-bold mb-2'> Fecha : <span className=' lg:block font-normal'>{hel.formatoFecha(item.fecha)}</span></p>
                    </div>
                    <div>
                        {item.aceptado ? <p className='block font-bold lg:mb-2'> Estado : <span className=' bg-inherit font-bold uppercase text-violet-900 lg:block'>aceptado</span> </p> : <p className='block font-bold lg:mb-2'> Estado : <span className='uppercase lg:block'>pendiente</span></p>}
                    </div>
                </div>
            </div>
        ))
    )

   return [FilterLists];
 }
 
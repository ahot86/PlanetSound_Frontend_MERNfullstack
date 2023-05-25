import React from 'react';
import '../../styles/App.css';

export const Boton = ({texto}) => {
  return (
    <>
        <input
          type='submit'
          value= {texto}
          className='botonSesion bg-violet-900 w-48 h-10 block mt-4 md:mt-8'
        />
    </>
  )
}

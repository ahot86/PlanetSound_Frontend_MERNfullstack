import React from 'react';
import logoImg from '../../img/planetMusic.png';

export const Logotipo = () => {
  return (
    <div className='flex gap-x-2 align-middle'>
        <img src={`${logoImg}`} alt='logo Planet Sound' className='w-10 h-auto md:w-12'/>
        <p className='text-white'>Planet <span className='font-semibold'>Music</span></p>          
    </div>    
  )
}


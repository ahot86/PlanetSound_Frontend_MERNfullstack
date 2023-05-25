import React from 'react';
import '../../styles/App.css';

export const Hero = ({bgHero}) => {
  return (
    <div className={`${bgHero} bg-cover h-60 bg-left md:h-[30rem] lg:h-[50rem] md:bg-center`}>
        <div className='px-4 flex flex-col pt-5 md:container md:mx-auto h-full items-end'>
            <div className='bg-white mb-2 w-auto py-1 px-2 opacity-75 md:my-5 md:py-2 md:px-4 lg:my-12 lg:py-3 lg:px-6'>
              <p className='text-right txColorPrincipal md:text-4xl lg:text-6xl'>Los mejores <span className=' font-black'>DJ's</span> musicales</p> 
            </div>
            <div className='bg-black w-auto py-1 px-2 opacity-75 md:my-5 md:py-2 md:px-4 lg:my-12 lg:py-3 lg:px-6'>
              <p className='text-right txColorSecuandario md:text-4xl lg:text-6xl'>para tus <span className=' font-black'>Eventos</span></p>
            </div>
        </div>
    </div>
  )
}

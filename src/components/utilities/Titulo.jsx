import React from 'react';
import '../../styles/App.css';

export const Titulo = ({texto}) => {
  return (
    <>
        <h2 className="text-center uppercase txColorPrincipal font-black text-2xl after:content-[''] after:block after:h-2 after:w-40 after:mt-1 after:mb-4 after:bg-black after:mx-auto after:bg-gradient-to-r after:from-violet-900 after:from-50% after:to-cyan-500 after:to-50% md:mt-4 lg:mt-10 md:text-3xl md:after:w-48">{texto}</h2>
    </>
  )
}

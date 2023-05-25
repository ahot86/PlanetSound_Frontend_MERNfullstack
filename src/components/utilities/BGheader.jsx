import React from 'react';
import { Logotipo } from './Logotipo';

export const BGheader = ({children}) => {
  return (
    <>
        <header className='bg-gradient-to-b from-blue-950 to-violet-950 sticky top-0 z-50'>
          <div className='py-5 px-4 flex justify-between md:container md:mx-auto'>
            <Logotipo/>
            {children}
          </div>
        </header>
    </>
  )
}

import React from 'react';
import {Outlet, Link} from 'react-router-dom';
import { BGheader } from '../utilities';
import style from '../../styles/Sesiones.module.css';

export const UserLayout = () => {
  return (
    <>
      <div className={`${style.bgSesiones} xl:h-[65rem]`}>
        <BGheader>
          <Link to="/" className=' text-white cursor-pointer'>Inicio</Link>
        </BGheader>

        <div className='bg-white px-4 py-6 mx-auto mt-12 w-5/6 rounded-2xl opacity-80 flex flex-col justify-between gap-4 md:gap-6 md:w-4/6 ,md:pt-6 md:pb-9 lg:px-8 lg:pt-0 lg:pb-12 xl:w-3/6'>
          <Outlet/>
        </div>        
      </div>
    </>
  )
}

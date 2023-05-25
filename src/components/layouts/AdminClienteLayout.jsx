import React from 'react';
import {Outlet, Navigate, Link, useLocation} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphonesSimple, faList } from '@fortawesome/free-solid-svg-icons';
import * as hooks from '../../hooks';
import { BGheader, Hero, Spinket } from '../utilities';

export const AdminClienteLayout = () => {
  const location = useLocation();
  const {cargando, clientePerfil, logout} = hooks.useUserAuth();

  const handleClick = (e) => {
    e.preventDefault();
    logout();
  }

  return (
    <>
      <BGheader>
        <input
          type='button'
          value='Cerrar Sesión'
          onClick={handleClick}
          className=' text-white cursor-pointer'
        />
      </BGheader>

      <Hero
        bgHero='bg-clienteHero'
      />

      {cargando ? (
        <Spinket/>
      ) : (
        <>
          <div className='bg-violet-900 w-4/5 mx-auto h-16 flex -mt-8 relative rounded-2xl md:w-3/5 lg:h-20 lg:-mt-10'>
            <Link
              to='/admin/cliente/lista-djs'
              className={`${location.pathname === '/admin/cliente/lista-djs' ? 'uppercase font-bold rounded-l-2xl' : 'normal-case font-normal'} flex-1 flex items-center justify-center text-center text-white border-r-2 h-full md:hover:bg-violet-700 md:hover:rounded-l-2xl`}
            >
              <FontAwesomeIcon icon={faHeadphonesSimple} className='mr-3'/>
              Lista DJ's
            </Link>
            <Link
              to='/admin/cliente/pedidos'
              className={`${location.pathname === '/admin/cliente/pedidos' ? 'uppercase font-bold rounded-r-2xl' : 'normal-case font-normal'} flex-1 flex items-center justify-center text-center text-white h-full md:hover:bg-violet-700 md:hover:rounded-r-2xl`}
            >
              <FontAwesomeIcon icon={faList} className='mr-3'/>
              Solicitudes
            </Link>
          </div>

          <div className='px-4 -mt-8 md:container md:mx-auto md:mb-0 lg:px-0 lg:-mt-10 lg:min-h-screen'>
            { clientePerfil?._id ?(
                <>
                  <div className={`${location.pathname === '/admin/cliente/pedidos' ? 'h-full' : 'lg:h-screen'} bg-white px-5 py-12 md:px-8 lg:p-8`}>
                    <Outlet/>
                  </div> 
                </>               
              ): 
                <Navigate to = '/'/> 
            }
          </div>
        </>
      )}
              
    </>
  )
}
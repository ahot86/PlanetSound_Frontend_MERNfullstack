import React from 'react';
import {Outlet, Navigate, useLocation, Link} from 'react-router-dom';
import * as hooks from '../../hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faList, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { BGheader, Spinket } from '../utilities';
import imagenDJ from '../../img/dj_avatar.png'

export const AdminDjLayout = () => {
  
  const location = useLocation();
  const {djPerfil, cargando, avatarDj, logOut} = hooks.useDjAuth();

  const handleClick = () => {
    logOut();    
  };
    
  
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

      {cargando ? (
        <Spinket/>
      ) : (
        <div className=' lg:flex lg:min-h-screen lg:container lg:mx-auto'>
          <div className='bg-violet-900 px-4 pt-6 pb-12 md:pb-14 lg:w-1/4 lg:px-8 lg:pt-8'>
            <div className='flex items-center gap-2 lg:flex-col lg:gap-4'>
              <div className='flex-1 lg:w-full'>
                {avatarDj ? <img src={avatarDj} alt='Imagen DJ' className='object-cover h-[8rem] w-[8rem] p-1 border-white border-2 mx-auto rounded-full md:w-[10rem] md:h-[10rem] lg:w-[12rem] lg:h-[12rem] lg:p-2'/> : <img src={`${imagenDJ}`} alt='Icon DJ' className='object-cover h-[8rem] w-[8rem] p-1 border-white border-2 mx-auto rounded-full md:w-[10rem] md:h-[10rem] lg:w-[12rem] lg:h-[12rem] lg:p-2'/>}
              </div>
              
              <div className='flex-1 lg:text-center lg:w-full lg:pb-8 lg:border-b-[3px] lg:border-cyan-500'>
                <p className='text-white mb-2 lg:block lg:text-2xl'>{`DJ ${djPerfil.nombre}`}</p>
                <p className='text-white mb-3 lg:block lg:text-2xl lg:mb-6'>{`${djPerfil.email}`}</p>
                <Link 
                  to='/admin/dj/perfil'
                  className={`${location.pathname === '/admin/dj/perfil' ? 'border-b-[3px] border-cyan-500 lg:border-b-0 lg:font-black lg:text-[1.35rem]' : 'border-collapse'} text-cyan-500 cursor-pointer pb-1 font-bold uppercase lg:block lg:pb-0`}
                >
                  <FontAwesomeIcon icon={faPenToSquare} className='mr-3'/>
                  Editar Perfil
                </Link>
              </div>
            </div>

            <div className='flex mt-4 gap-4 lg:flex-col lg:gap-10 lg:mt-10'>
              <Link
                to= '/admin/dj/pedidos'
                className={`${location.pathname === '/admin/dj/pedidos' ? 'bg-white text-violet-900' : 'bg-inherit text-white'} text-center uppercase cursor-pointer font-bold flex-1 p-2 rounded-2xl border-2`}              
              >
                <FontAwesomeIcon icon={faList} className='mr-3'/>Solicitudes   
              </Link>

              <Link
                to= '/admin/dj/pedidos-aceptados'
                className={`${location.pathname === '/admin/dj/pedidos-aceptados' ? 'bg-white text-violet-900' : 'bg-inherit  text-white'} text-center uppercase cursor-pointer font-bold flex-1 p-2 rounded-2xl border-2`}
              >
                <FontAwesomeIcon icon={faSquareCheck} className='mr-3'/>Aceptados
              </Link>            
            </div>
          </div>

          <div className='lg:w-3/4 lg:min-h-screen'>
            { djPerfil?._id ?(
                <>
                  <div className='px-4 -mt-8 relative md:container md:mx-auto md:mb-0 lg:px-0 lg:mt-0 lg:min-h-screen'>
                    <div className={`${location.pathname === '/admin/dj/perfil' ? 'h-full lg:h-screen' : 'overflow-y-scroll h-screen'} bg-white p-8`}>
                      <Outlet/>
                    </div>                  
                  </div>
                </>               
              ): 
                <Navigate to = '/'/> 
            }
          </div>
        </div>
      )}
    </>
  )
}
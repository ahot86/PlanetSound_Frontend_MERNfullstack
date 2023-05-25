import React from 'react';
import {Link} from 'react-router-dom';
import {uti} from '../../components';
import djAvatar from '../../img/dj_avatar.png';
import clienteAvatar from '../../img/cliente_avatar.png';

export const Users = () => {
  return (
    <>
      <uti.Titulo
        texto = 'Bienvenidos'
      />
      <p className=' text-center'>Antes de continuar te sugerimos; por favor, seleccionar la opción a la que perteneces para poder ser redirijido correctamente</p>
      <div className=' flex justify-evenly'>
        <div>
          <Link to='/user/dj' className='font-bold text-center block mt-2'>
            <uti.Avatar
              color= 'bg-violet-900 mb-2'
              imagenAvatar = {djAvatar}
            />
            DJ
          </Link>
        </div>
        <div>
          <Link to='/user/cliente' className='font-bold text-center block mt-2'>
            <uti.Avatar
              color= 'bg-cyan-500 mb-2'
              imagenAvatar = {clienteAvatar}
            />
            Cliente
          </Link>
        </div>
      </div>
      
    </>
  )
}
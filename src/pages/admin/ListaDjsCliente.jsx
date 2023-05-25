import React, { useEffect, useState } from 'react';
import * as hooks from '../../hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft, faCircleRight } from '@fortawesome/free-solid-svg-icons';
import imagenDJ from '../../img/dj_avatar.png';
import { uti } from '../../components';
import '../../styles/App.css';

export const ListaDjsCliente = () => {
  const {cargarListaDJs, listaDJs, avatarPerfil, djEscojido, contar, setContar} = hooks.useUser();
  const [anterior, setAnterior] = useState(false);
  const [siguiente, setSiguiente] = useState(false);

  useEffect(()=>{
    cargarListaDJs();
  }, []);

  const handleClickAnterior = () => {    
    if(contar < 1) {
      setAnterior(true);
      return
    }
    setSiguiente(false);    
    setContar(contar - 1);
  }

  const handleClickSiguiente = () => {    
    if(contar > (listaDJs.length - 2)) {
      setSiguiente(true);
      return
    }
    setAnterior(false);
    setContar(contar + 1);
  }

  return (
    <>
      <uti.Titulo
        texto="Lista de DJ'S"
      />

      {listaDJs.length === 0 ? (
        <uti.Spinket/>
      ) : (
        <>
          <div className='mt-6 lg:mt-12 lg:grid lg:grid-cols-2 lg:grid-rows-[6rem_minmax(20rem,_1fr)] lg:h-[40rem]  lg:gap-x-8'>
            <div className='flex justify-center mb-4 lg:mb-0 lg:py-6 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2'>
              <button
                type = 'button'
                disabled = {anterior}
                onClick = {() => handleClickAnterior()}
                className = {`${anterior ? 'text-violet-500' : 'txColorPrincipal'} botonDirecciones px-4 py-2 md:px-8 lg:px-12`}
              > <FontAwesomeIcon icon={faCircleLeft} className=' mr-2' /> Anterior </button>
              <button
                type = 'button'
                disabled = {siguiente}
                onClick = {(e) => handleClickSiguiente()}
                className = {`${siguiente ? 'text-violet-500' : 'txColorPrincipal'} botonDirecciones px-4 py-2 md:px-8 lg:px-12`}
              >Siguiente <FontAwesomeIcon icon={faCircleRight} className=' ml-2' /> </button>
            </div>

            {contar >= 0 && (
              <>
                <div className=' lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3'>
                  {listaDJs[contar].avatar?.data ? (
                    <img src={avatarPerfil(listaDJs[contar].avatar)} alt='DJ Foto' className=' object-cover h-80 md:h-[28rem] lg:h-[40rem]'/>
                  ) : (
                    <div className='bg-gray-400 p-8 md:h-[28rem] lg:h-[40rem] md:flex md:flex-col md:justify-center'>
                      <p className='text-white uppercase font-bold text-center'>Sin Foto</p>
                      <div className='border-white border-2 rounded-full p-4 md:h-80 md:w-80 md:mx-auto'>
                        <img src={`${imagenDJ}`} alt='DJ sin foto' className=' mx-auto md:h-full'/>
                      </div>                      
                    </div>                      
                  )}
                </div>

                <div className='mt-4 lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3'>
                  <div>
                    <p className='text-lg font-bold mb-4'>Nombre del Dj : <span className='txColorPrincipal uppercase block mt-1 lg:text-xl md:inline md:mt-0'>{listaDJs[contar].nombre}</span></p>
                    <p className='text-lg font-bold mb-4'>Años de experiencia : <span className='txColorPrincipal uppercase block mt-1 lg:text-xl md:inline md:mt-0'>{listaDJs[contar].yearsExp}</span></p>
                    <p className='text-lg font-bold'>Reseña : <span className='txColorPrincipal block mt-1 lg:text-xl md:mt-0'>{listaDJs[contar].descripcion}</span></p>
                  </div>
                  <button
                      type='button'
                      onClick={() => djEscojido(listaDJs[contar])}
                      className='botonEditarPerfil bg-violet-900 px-12 py-4 block mt-4 md:mt-6 md:hover:bg-violet-700 lg:mt-8'
                    >Enviar Solicitud</button>
                </div>
              </>
            )}
          </div>
        </>
      )}

    </>
  )
}

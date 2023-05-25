import React, {useEffect, useState} from 'react';
import * as hooks from '../../hooks';
import {hel, uti} from '../../components';
import '../../styles/App.css';

export const PerfilDj = () => {
  const [editando, setEditando] = useState(true);
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [yearsExp, setYearsExp] = useState(0);
  const [descripcion, setDescripcion] = useState('');
  const {djPerfil} = hooks.useDjAuth();
  const {editarPerfil, errores, mensaje, setErrores} = hooks.useDj();

  useEffect(()=>{
    if(djPerfil?.nombre){
      setNombre(djPerfil.nombre);
      setEmail(djPerfil.email);
      setYearsExp( Number(djPerfil.yearsExp) );
      setDescripcion(djPerfil.descripcion);
    }
  }, [djPerfil])

  const guardarCambio = (e) => {
    e.preventDefault();    
    const formData = new FormData(e.target);

    if([nombre, email, yearsExp, descripcion].includes('') || yearsExp === 0){
      setErrores('Todos los campos son obligatórios');
      return;
    }

    if(email.length > 0){
      const validar = hel.validarEmail(email);
      if(validar){
        setErrores(validar);
        return
      }else{
        setErrores('');
      }
    }

    setErrores('');

    editarPerfil(formData);
  }

  return (
    <>
        <uti.Titulo
          texto= 'Editar Perfil'
        />

        <p className=' text-center block mb-4 lg:text-left'>En esta sección podrás actualizar la foto de tu perfil, actualizar tus datos personales como nombre, email, años de experiencia y del mismo modo podrás mejorar o cambiar la descripción de tus habilidades como DJ.</p>

        {errores && <uti.ErrorAlerta> {errores} </uti.ErrorAlerta>}
        {mensaje && !errores && <uti.MsgAlerta> {mensaje} </uti.MsgAlerta>}

        <uti.EditarPerfil
          setTipo={setEditando}
          texto= 'Haz click en el cuadro para editar tu perfil'
        />

        <form
          encType = 'multipart/form-data'
          onSubmit = {(e) => guardarCambio(e)}
          noValidate
          className=' mt-4'
        > 
          <div className=' mb-4'>
            <label className='block font-bold mb-2'>Foto: </label>
            <input
              type='file'
              name='avatar'
              disabled = {editando}
              className={`${editando ? 'file:bg-violet-500 text-gray-400' : 'text-gray-600 file:bg-violet-900 hover:file:bg-violet-700 file:cursor-pointer'} block w-full text-sm lg:text-lg file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:text-white lg:file:px-6 lg:file:text-lg`}
            />
          </div>

          <div className=' mb-4'>
            <label className='block font-bold'>Nombre: </label>
            <input
              type = 'text'
              name = 'nombre'
              value = {nombre}
              disabled = {editando}
              onChange={(e) => setNombre(e.target.value)}
              className='mt-2 border-2 border-violet-900 border-solid block w-full rounded-2xl py-1 px-3 bg-gray-200 focus:border-cyan-500 focus:bg-gray-300 focus:border-[3px] outline outline-0'
            />
          </div>

          <div className=' mb-4'>
            <label className='block font-bold'>Email: </label>
            <input
              type = 'email'
              name = 'email'
              value = {email}
              disabled = {editando}
              onChange={(e) => setEmail(e.target.value)}
              className='mt-2 border-2 border-violet-900 border-solid block w-full rounded-2xl py-1 px-3 bg-gray-200 focus:border-cyan-500 focus:bg-gray-300 focus:border-[3px] outline outline-0'
            />
          </div>

          <div className=' mb-4'>
            <label className='block font-bold'>Años de Experiencia: </label>
            <input
              type = 'number'
              name = 'yearsExp' 
              value = {yearsExp}
              disabled = {editando}
              onChange={(e) => setYearsExp( Number(e.target.value) )}
              className='mt-2 border-2 border-violet-900 border-solid block w-full rounded-2xl py-1 px-3 bg-gray-200 focus:border-cyan-500 focus:bg-gray-300 focus:border-[3px] outline outline-0'
            />
          </div>

          <div className=' mb-4'>
            <label className='block font-bold'>Descripción: </label>
            <textarea
              type = 'text'
              name = 'descripcion'
              value = {descripcion}              
              disabled = {editando}
              onChange={(e) => setDescripcion(e.target.value)}
              className='mt-2 border-2 border-violet-900 border-solid block w-full rounded-2xl py-1 px-3 bg-gray-200 focus:border-cyan-500 focus:bg-gray-300 focus:border-[3px] outline outline-0'
            ></textarea>
          </div>
          
          <div>
            <input
              type='submit'
              disabled = {editando}
              value= 'Guardar Cambios'
              className={`${editando ? 'botonEditarPerfil bg-violet-500 ' : 'botonSesion bg-violet-900'}  w-48 h-10 block mt-4 md:mt-8 md:w-64 md:h-12`}
            />
          </div>

        </form>
    </>
  )
}

import React from 'react';
import style from '../../styles/Sesiones.module.css';

export const MostrarContrasena = ({setTipo, texto}) => {
  return (
    <>
        <label className={style.mostrarContrasena}>
          <input 
            type='checkbox'
            onChange={(e) => e.currentTarget.checked ? setTipo('text') : setTipo('password')}
          />
            {texto}
        </label>
    </>
  )
}

export const EditarPerfil = ({setTipo, texto}) => {
  return (
    <>
      <label className={style.mostrarContrasena}>
        <input 
          type='checkbox'
          onChange={(e) => e.currentTarget.checked ? setTipo(false) : setTipo(true)}
        />
          {texto}
      </label>
    </>
  )
}
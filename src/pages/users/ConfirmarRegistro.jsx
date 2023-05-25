import React, {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import baseAxios from '../../config/axios';
import * as hooks from '../../hooks';
import { uti } from '../../components';
import clienteAvatar from '../../img/cliente_avatar.png';

export const ConfirmarRegistro = () => {
  const params = useParams();
  const {mensajes, setMensajes, errores, setErrores} = hooks.useUserAuth();
  const [confirmado, setConfirmado] = useState(false);

  useEffect(() => {
    const ConfirmarNuevoCliente = async (params) => {
      const {token} = params;      
      try {
        const {data} = await baseAxios(`/cliente/confirmar/${token}`);
        setMensajes(data.msg);
        setErrores('');
        setTimeout(()=>{ setMensajes('') }, 6000);        
      } catch (error) {
        setErrores(error.response.data.msg);
        setConfirmado(false);
      }
      setConfirmado(true)      
    }

    ConfirmarNuevoCliente(params);    
  }, []);

  return (
    <>
        <uti.Titulo
          texto= 'Confirmado'
        />

        <uti.Avatar
          color= 'bg-cyan-500'
          imagenAvatar = {clienteAvatar}
        />

        {errores && <uti.ErrorAlerta> {errores} </uti.ErrorAlerta>}
        {mensajes && !errores && <uti.MsgAlerta> {mensajes} </uti.MsgAlerta>}
        
        {confirmado && !errores && 
          <div className='text-violet-900 font-bold'>
            <Link to='/user/cliente' className='block text-center'>Iniciar Sesion</Link>
          </div>
        }
    </>
  )
}
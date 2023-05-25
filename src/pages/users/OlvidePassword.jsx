import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import baseAxios from '../../config/axios';
import * as hooks from '../../hooks';
import { hel, uti } from '../../components';
import clienteAvatar from '../../img/cliente_avatar.png';

export const OlvidePassword = () => {
  const {mensajes, setMensajes, errores, setErrores} = hooks.useUserAuth();

  const [email, setEmail] = useState('');

  useEffect(()=>{
    setErrores('');
    setMensajes('');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(email.length <= 0){
      setErrores('Todos los campos son obligatorios');
      return
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
    
    try {
      const {data} = await baseAxios.post('/cliente/olvide-password', {email});
      setMensajes(data.msg);
      setErrores('');
      setTimeout(()=>{ setMensajes(''), setEmail('') }, 3000);
    } catch (error) {
      setErrores(error.response.data.msg);      
    }
  };

  return (
    <>
        <uti.Titulo
          texto= 'Olvide Password'
        />

        <uti.Avatar
          color= 'bg-cyan-500'
          imagenAvatar = {clienteAvatar}
        />

        {errores && <uti.ErrorAlerta> {errores} </uti.ErrorAlerta>}
        {mensajes && !errores && <uti.MsgAlerta> {mensajes} </uti.MsgAlerta>}

        <form
          onSubmit={(e) => handleSubmit(e)}
          noValidate
        >

          <uti.CampoSesiones
            mBottom= 'mb-4'
            labelCampo= 'Ingresar Email:'
            typeCampo= 'email'
            placeHCampo= 'Email Aquí'
            valueCampo= {email}
            setValueCampo= {setEmail}
          />

          <uti.Boton
            texto= 'Enviar'
          />
        </form>

        <div className='text-violet-900 font-bold'>
          <Link to='/user/cliente' className='block text-center'>Login</Link>
        </div>
    </>
  )
}
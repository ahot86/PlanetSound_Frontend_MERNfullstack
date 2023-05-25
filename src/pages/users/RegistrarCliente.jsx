import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import baseAxios from '../../config/axios';
import * as hooks from '../../hooks';
import {hel, uti} from '../../components';
import clienteAvatar from '../../img/cliente_avatar.png';

export const RegistrarCliente = () => {
  const {mensajes, setMensajes, errores, setErrores} = hooks.useUserAuth();

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [tipo, setTipo] = useState('password');

  useEffect(()=>{
    setErrores('');
    setMensajes('')
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if([nombre, email, password].includes('')){
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

    if(password.length < 6){
      setErrores('Tu password debe de tener mínimo 6 carácteres');
      return
    }   
    
    try {
      const {data} = await baseAxios.post('/cliente', {nombre, email, password});
      setMensajes(data.msg);
      setErrores('');
      setTimeout(()=>{ 
        setMensajes('');
        setNombre('');
        setEmail('');
        setPassword('');  
      }, 3000);             
    } catch (error) {
      setErrores(error.response.data.msg);
    }    
  }

  return (
    <>
        <uti.Titulo
          texto= 'Registrarse'
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
            labelCampo= 'Nombre:'
            typeCampo= 'text'
            placeHCampo= 'Nombre Aquí'
            valueCampo= {nombre}
            setValueCampo= {setNombre}
          />

          <uti.CampoSesiones
            mBottom= 'mb-4'
            labelCampo= 'Ingresar Email:'
            typeCampo= 'email'
            placeHCampo= 'Email Aquí'
            valueCampo= {email}
            setValueCampo= {setEmail}
          />

          <uti.CampoSesiones
            mBottom= 'mb-0'
            labelCampo= 'Ingresar Password:'
            typeCampo= {tipo}
            placeHCampo= 'Password Aquí'
            valueCampo= {password}
            setValueCampo= {setPassword}
          />

          <uti.MostrarContrasena
            setTipo= {setTipo}
            texto= 'Mostrar Contraseña'
          />

          <uti.Boton
            texto= 'Registrarse'
          />
        </form>

        <div className='flex justify-between text-violet-900 font-bold'>
          <div className='flex-1'>
            <Link to='/user/cliente' className='block text-left'>Iniciar Sesión</Link>
          </div>
          <div className='flex-1'>
            <Link to='/user/cliente/olvide-password' className='block text-right'>Olvidé Mi Password</Link>
          </div>
        </div>
    </>
  )
}
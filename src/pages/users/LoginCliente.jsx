import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import * as hooks from '../../hooks';
import {hel, uti} from '../../components';
import clienteAvatar from '../../img/cliente_avatar.png';

export const LoginCliente = () => {

  const {login, errores, setErrores} = hooks.useUserAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [tipo, setTipo] = useState('password');

  useEffect(()=>{
    setErrores('');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if([email, password].includes('')){
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

    login(email, password);
  }

  return (
    <>
      <uti.Titulo
        texto= 'Iniciar Sesión'
      />

      <uti.Avatar
        color= 'bg-cyan-500'
        imagenAvatar = {clienteAvatar}
      />

      {errores && <uti.ErrorAlerta> {errores} </uti.ErrorAlerta>}

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
          texto= 'Iniciar Sesión'
        />
      </form>

      <div className='flex justify-between text-violet-900 font-bold'>
        <div className='flex-1'>
          <Link to='/user/cliente/registrar' className='block text-left'>¿Eres Nuevo? Registrate</Link>
        </div>
        <div className='flex-1'>
          <Link to='/user/cliente/olvide-password' className='block text-right'>Olvidé Mi Password</Link>
        </div>
      </div>

    </>
  )
}
import React, {useState, useEffect} from 'react';
import baseAxios from '../../config/axios';
import { useParams, Link } from 'react-router-dom';
import * as hooks from '../../hooks';
import { uti } from '../../components';
import clienteAvatar from '../../img/cliente_avatar.png';

export const NuevoPassword = () => {

  const params = useParams();
  const {token} = params;
  const {mensajes, setMensajes, errores, setErrores} = hooks.useUserAuth();

  const [password, setPassword] = useState('');
  const [confirPass, setConfirPass] = useState('');
  const [confirmado, setConfirmado] = useState(false);
  const [tipo, setTipo] = useState('password');

  useEffect(()=>{
    const comprobarToken = async () => {
      try {
        const {data} = await baseAxios(`/cliente/olvide-password/${token}`)
        setMensajes(data.msg);
        setErrores('');
        setTimeout(() => { setMensajes('') }, 2000);
      } catch (error) {
        setErrores(error.response.data.msg);
      }
    };
    comprobarToken();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if([password, confirPass].includes('')){
      setErrores('Todos los campos son obligatorios');
      return
    }

    if(password.length < 6){
      setErrores('El password debe tener mínimo 6 carácteres');
      return
    }

    if(password !== confirPass){
      setErrores('Ambos passwords deben ser iguales');
      return
    }    
    
    try {
      const {data} = await baseAxios.post(`/cliente/olvide-password/${token}`, {password});
      setMensajes(data.msg);
      setErrores('');
      setTimeout(() => { 
        setMensajes('');
        setPassword('');
        setConfirPass('') 
      }, 3000);      
    } catch (error) {
      setErrores(errores.response.data.msg);
      setConfirmado(false);
    }

    setConfirmado(true);
  }


  return (
    <>
        <uti.Titulo
          texto= 'Nuevo Password'
        />

        <uti.Avatar
          color= 'bg-cyan-500'
          imagenAvatar = {clienteAvatar}
        />

        {errores && <uti.ErrorAlerta> {errores} </uti.ErrorAlerta>}
        {mensajes && !errores && <uti.MsgAlerta> {mensajes} </uti.MsgAlerta>}

        <form
          onSubmit={(e) => handleSubmit(e)}
        >

          <uti.CampoSesiones
            mBottom= 'mb-4'
            labelCampo= 'Nuevo Password:'
            typeCampo= {tipo}
            placeHCampo= 'Nuevo Password Aquí'
            valueCampo= {password}
            setValueCampo= {setPassword}
          />

          <uti.CampoSesiones
            mBottom= 'mb-0'
            labelCampo= 'Confirmar Nuevo Password:'
            typeCampo= {tipo}
            placeHCampo= 'Confirmar Nuevo Password'
            valueCampo= {confirPass}
            setValueCampo= {setConfirPass}
          />

          <uti.MostrarContrasena
            setTipo= {setTipo}
            texto= 'Mostrar Contraseña'
          />

          <uti.Boton
            texto= 'Actualizar'
          />
        </form>
        
        {confirmado && !errores &&
          <div className='text-violet-900 font-bold'>
            <Link to='/user/cliente' className='block text-center'>Iniciar Sesion</Link>
          </div>
        }
        
    </>
  )
}
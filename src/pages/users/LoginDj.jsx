import {useState, useEffect} from 'react'
import * as hooks from '../../hooks';
import {hel, uti} from '../../components';
import djAvatar from '../../img/dj_avatar.png';


export const LoginDj = () => {
  const {login, errores, setErrores} = hooks.useDjAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [tipo, setTipo] = useState('password');

  useEffect(()=>{
    setErrores('');
  }, []);  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if([email,password].includes('')){
      setErrores('Todos los campos son obligatorios');
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
    
    await login(email, password);    
  }

  return (
    <>
      <uti.Titulo
        texto = 'Iniciar Sesión'
      />

      <uti.Avatar
        color= 'bg-violet-900'
        imagenAvatar = {djAvatar}
      />

      {errores && <uti.ErrorAlerta>{errores}</uti.ErrorAlerta>}

      <form
        onSubmit={handleSubmit}
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
        
    </>
  )
};

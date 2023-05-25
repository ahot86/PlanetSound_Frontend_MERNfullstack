import React, {useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faHeadphones } from '@fortawesome/free-solid-svg-icons';

import {uti} from '../components';
import imgNosotros from '../img/nosotros.jpeg';
import style from '../styles/Inicio.module.css';
import '../styles/App.css';

export const Inicio = () => {
  const navigate = useNavigate();

  const datosLocalStorage = localStorage.key(0);

  useEffect(()=>{
    if(datosLocalStorage){
      if(datosLocalStorage === 'djTK'){
        navigate('/admin/dj');
      } else {
        navigate('/admin/cliente');
      }
    }    
  }, []);

  return (
    <>
      <uti.BGheader>
        <Link to = "/user" className='text-white cursor-pointer'>Iniciar Sesión</Link>
      </uti.BGheader>
      
      <uti.Hero
        bgHero='bg-hero'
      />

      <main className='px-4 -mt-8 relative md:px-0 md:-mt-10'>
        <div className='bg-white rounded-xl p-8 md:container md:mx-auto'>
          <uti.Titulo
            texto='Nosotros'
          />
          <div className='mt-7 mb-3 lg:mb-8 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center'>
            <div className='mb-4'>
              <p>Bienvenid@ a Planet Music, el único lugar en la web donde podrá encontrar a los mejores DJ's de la escena local e internacional dispuestos a ofrecerte la mejor combinación musical para tus eventos, reuniones, celebracions y mucho más.</p>
              <br/>
              <p>Solo tienes que registrarte en nuestra plataforma y crearte una cuenta. 
              Si es que ya tienes una cuenta registrada, solo tienes que iniciar sesión y ver la lista de DJ's que tenemos para ti y realizar tu pedido musical para tu evento.</p>
            </div>            
            <img src={`${imgNosotros}`} alt='Imagen Nosotros'/>
          </div>          
        </div>
      </main>

      <section className={style.seccionCliente}>
        <div className='grid grid-rows-[19rem_17rem] px-4 md:container md:mx-auto md:grid-rows-none md:grid-cols-2 md:gap-8 md:py-44 lg:py-13 xl:py-44 2xl:py-60'>
          <div className='text-white text-center flex flex-col justify-center md:col-start-2 md:col-end-3'>
            <h2 className='text-xl mb-4 md:text-xl lg:text-2xl lg:mb-8'>¿Eres Cliente y deseas Registrarte o Iniciar Sesión?</h2>
            <p className='mb-4 lg:mb-8'>Entonces haz click en el siguiente boton</p>
            <button     
              type = 'button'
              className='boton bg-cyan-500 w-48 h-10'
              onClick = {() => { navigate('/user/cliente')}}
            ><FontAwesomeIcon icon={faCircleUser}/> Cliente</button>
          </div>         
        </div>
      </section>

      <section className='px-4 -mt-8 relative md:px-0 md:-mt-10'>
        <div className='bg-white rounded-xl p-8 md:container md:mx-auto'>
          <uti.Titulo
            texto='Galería'
          />
          <uti.Galeria/>
        </div>
      </section>

      <section className={style.seccionDJ}>
        <div className='grid grid-rows-[19rem_17rem] px-4 md:container md:mx-auto md:grid-rows-none md:grid-cols-2 md:gap-8 md:py-44 lg:py-13 xl:py-44 2xl:py-60'>
            <div className='text-white text-center flex flex-col justify-center md:col-start-1 md:col-end-2'>
              <h2 className='text-xl mb-4 md:text-xl lg:text-2xl lg:mb-8'>¿Eres DJ y deseas Iniciar Sesión en tu cuenta?</h2>
              <p className='mb-4 lg:mb-8'>Entonces haz click en el siguiente boton</p>
              <button     
                type = 'button'
                className='boton bg-cyan-500 w-48 h-10'
                onClick = {() => { navigate('/user/dj')}}
              ><FontAwesomeIcon icon={faHeadphones}/> DJ</button>
            </div>         
          </div>
      </section>

      <footer className='bg-gradient-to-t from-blue-950 to-violet-950 relative py-6 flex justify-center'>
        <p className='text-white'>Planet <span className=' font-semibold'>Music</span> - Proyecto realizado en 2023 </p>
      </footer>
    </>
  )
}
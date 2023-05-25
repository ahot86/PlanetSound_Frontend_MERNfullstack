import React, {useEffect} from 'react';
import * as hooks from '../../hooks';
import {uti} from '../../components'; 

export const InicioDj = () => {

  const {listaPedidos} = hooks.useDj();

  useEffect(()=>{
    listaPedidos();
  }, []);
  
  return (
    <>
        <uti.Titulo
          texto='Bienvenido'
        />
        
        <p className=' text-center block mb-4 lg:text-left'>Hola DJ, has iniciado correctamente en tu cuenta. Ahora podrás acceder a las diferentes secciones, como por ejemplo editar tu perfil. También podrás ver en Solicitudes, la lista de todas las solicitudes que te envían los clientes para saber tu disponibilidad para sus eventos. En el área de Aceptados podrás visualizar todas las solicitudes que has aceptado. Esperamos que todas estas herramientas te sean muy útiles para tu profesión.</p>
    </>
  )
}
import React, {useEffect} from 'react';
import * as hooks from '../../hooks';
import { uti } from '../../components';

export const InicioCliente = () => {
  const {cargarListaDJs, listaPedidosCliente} = hooks.useUser();

  useEffect(()=>{
    cargarListaDJs();
    listaPedidosCliente();
  }, []);


  return (
    <>
        <uti.Titulo
          texto= 'Bienvenido'
        />

        <p className=' text-center block mb-4 lg:text-left'>Hola, has iniciado correctamente en tu cuenta. Ahora podrás acceder a las diferentes secciones, como por ejemplo a la sección Lista de Djs, en la cual podrás ver el perfíl de los diferentes DJ registrados en la plataforma. En esa misma sección podrás hacer tu solicitud al DJ para reservar sus servicios para el evento que especifiques. Luego también podrás acceder a la sección de Solicitudes en la cual verás la lista completa de todas las solicitudes que has realizado en la plataforma y cuales han sido aceptadas por el dj. Para facilitarte la visualización de tus solicitudes en el tiempo, en esa misma sección encontrarás una herramienta en la cual podrás filtrar tus solicitudes por los meses que deseas ver. Esperamos que todas estas herramientas te sean muy útiles para que puedas disfrutar del mejor servicio que ofrecen los DJs en esta plataforma.</p>
    </>
  )
}
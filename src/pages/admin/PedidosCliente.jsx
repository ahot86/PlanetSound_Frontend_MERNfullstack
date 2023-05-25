import React, {useEffect, useState} from 'react';
import {hel, uti} from '../../components';
import * as hooks from '../../hooks';


export const PedidosCliente = () => {
  const {pedidosCliente, listaPedidosCliente, avatarPerfil} = hooks.useUser();
  const [idMes, setidMes, setItem, MultipleFilters] = hooks.useMultipleFilters(hel.listaMeses());
  const [mesesFiltrados, setMesesFiltrados] = useState([]); 
  const [ListaSolicitudes] = hooks.useFilterList(pedidosCliente, avatarPerfil);
  const [SolicitudesFiltradas] = hooks.useFilterList(mesesFiltrados, avatarPerfil); 
  const [mesSeleccionado, setMesSeleccionado] = useState([]);  

  useEffect(()=>{
    listaPedidosCliente();
  }, []);

  useEffect(()=>{
    const filtrarPedidos = (arregloPedidos) => {
      if(mesSeleccionado.includes(idMes)) return;
      const filtrados = arregloPedidos.filter(pedido => hel.mesYearSolicitud(pedido.fecha)[0] === idMes);
      setMesesFiltrados([...filtrados, ...mesesFiltrados]);
      setMesSeleccionado([...mesSeleccionado, idMes]);
    };
    filtrarPedidos(pedidosCliente)    
  }, [idMes]);

  return (
    <>
        <uti.Titulo
          texto='Solicitudes'
        />

        {pedidosCliente.length <= 0 ? (
          <p className=' text-center text-violet-900 font-semibold'>Aún no has realizado ninguna solicitud a los DJ's</p>
        ) : (
          <>
            <div className=' flex flex-col gap-4'>
              <label className='txColorPrincipal'>
                En esta sección podrás ver todas tus solicitudes realizadas. Para filtrarlas por meses solo tienes que hacer click en cada mes. Si deseas volver a ver la lista completa haz click{' '}
                <button
                  type='button'
                  onClick={() => {setidMes(''), setItem([]), setMesSeleccionado([]), setMesesFiltrados([])} }
                  className=' font-bold uppercase'
                >Aquí</button>
              </label>
              <MultipleFilters/>              
            </div>
            
            {idMes === '' ? (
              <div className='lg:mt-6 lg:grid lg:grid-cols-2 lg:gap-6'>
                <ListaSolicitudes/>
              </div>
              
            ) : (
              <div className='lg:mt-6 lg:grid lg:grid-cols-2 lg:gap-6'>
                <SolicitudesFiltradas/>
              </div>
            )}
                        
          </>
        )}
    </>
  )
}

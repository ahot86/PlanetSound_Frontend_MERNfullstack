import React, {useEffect, useState} from 'react';
import * as hooks from '../../hooks';
import {hel, uti} from '../../components';

export const PedidosAceptadosDj = () => {
    const {djPedidos, listaPedidos} = hooks.useDj();

    const [mesesFiltrados, setMesesFiltrados] = useState([]);

    const [indexMes, SelectMeses] = hooks.useSelectMesDj('Seleccione un mes:', hel.listaMeses());
    const [ListaCompleta] = hooks.useListado(djPedidos);
    const [ListaFiltrada] = hooks.useListado(mesesFiltrados);


    useEffect(()=>{
        listaPedidos();
    }, []);

    useEffect(()=>{
        const filtrarMeses = (arregloPedidos) => {
            const mesFiltrado = arregloPedidos.filter(pedido => hel.mesYearSolicitud(pedido.fecha)[0] === Number(indexMes));
            setMesesFiltrados(mesFiltrado);
        }
        filtrarMeses(djPedidos);
    },[indexMes]);

  return (
    <>
        <uti.Titulo
            texto='Aceptados'
        />

        <p className='text-center block mb-4 lg:text-left'>En esta sección encontrarás todas las solicitudes de trabajo que has aceptado. Podrás tambien filtrar tus solicitudes aceptadas de acuerdo al mes en el que se llevó a cabo el evento.</p>

        {djPedidos?.length <= 0 ? (
            <p className=' text-center text-violet-900 font-semibold'>Aún no tienes solicitudes o no has aceptado ningúna solicitud de los clientes</p>
        ) : (
            <>
                <SelectMeses/>                
            </>
        ) }

        <div>
            {indexMes.length === 0 ? (
                <>
                    <ListaCompleta/>
                </>
            ) : (
                <>
                    <ListaFiltrada/>
                </>
            )}
        </div>
    </>
  )
}

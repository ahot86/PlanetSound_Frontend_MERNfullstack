import React, {useEffect} from 'react';
import * as hooks from '../../hooks';
import {hel, uti} from '../../components';

export const PedidosDj = () => {
    const {errores, djPedidos, actualizarPedido, mensaje, listaPedidos, setErrores, setMensaje} = hooks.useDj();

    useEffect(()=>{
        listaPedidos();
        setErrores('');
        setMensaje('');
      }, []);

    const handleClick = (pedido) => {
        actualizarPedido(pedido);
    }

  return (
    <>
        <uti.Titulo
          texto='Solicitudes'
        />

        <p className='text-center block mb-4 lg:text-left'>Aquí podrás visualizar la lista completa de solicitudes realizada por los clientes. En cada una de ellas podrás ver el tipo de evento, la preferencia musical para el evento, la fecha y la duración del show musical.</p>

        {errores && <uti.ErrorAlerta> {errores} </uti.ErrorAlerta>}
        {mensaje && !errores && <uti.MsgAlerta> {mensaje} </uti.MsgAlerta>}

        {djPedidos?.length <= 0 && <p className=' text-center text-violet-900 font-semibold'>Aún no tienes solicitudes de Clientes</p>}

        {djPedidos.map(pedido => (
            pedido?._id &&
            <div
                key={pedido._id}
                className={`${pedido.aceptado ? 'bg-violet-200 border-violet-400' : 'bg-gray-300 border-gray-400'} my-4 p-3 rounded-2xl border-2 md:flex md:justify-between md:p-6`}
            >
              <div className='md:flex-1'>              
                <p className='block font-bold mb-2'>Tipo de Evento: <span className='block font-normal'>{pedido.evento}</span></p>
                <p className='block font-bold mb-2'>Solicitud de Musica: <span className='block font-normal'>{pedido.musica}</span>  </p>
                <p className='block font-bold mb-2'>Fecha del Evento: <span className='block font-normal'>{hel.formatoFecha(pedido.fecha)}</span>  </p>
                <p className='block font-bold mb-2'>Duración del Evento: <span className='block font-normal'>{pedido.duracion} hora</span>  </p>
              </div>
              <div className='md:flex-1'>
                {pedido?.aceptado 
                  ? (
                    <>
                      <label className='block font-bold mb-2'>Respuesta:</label>
                      <input type='text' defaultValue='Solicitud Aceptada' className=' bg-inherit font-bold text-xl uppercase text-violet-900'/>
                    </>
                  ) : (
                    <>
                      <label className='block font-bold mb-2'>Respuesta:</label>
                      <button
                        type='button'
                        className=' transition block bg-violet-900 text-white py-2 w-full rounded-[2rem] mb-4 hover:bg-violet-600 md:w-60'                              
                        onClick={() => handleClick(pedido)} 
                      >Aceptar</button>
                    </>
                  )
                }
              </div>
            </div>
        ))}
    </>
  )
}

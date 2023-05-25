import React, {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import baseAxios from '../../config/axios';
import * as hooks from '../../hooks';
import {uti} from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones, faReply } from '@fortawesome/free-solid-svg-icons';
import imagenDJ from '../../img/dj_avatar.png';
import '../../styles/App.css';


export const PedidoCliente = () => {
  const navigate = useNavigate();
  const {djSeleccionado, setDjSeleccionado, avatarPerfil} = hooks.useUser();
  const {mensajes, errores, setMensajes, setErrores} = hooks.useUserAuth();

  const param = useParams();
  const {djId} = param;

  const [evento, setEvento] = useState('');
  const [fecha, setFecha] = useState('');
  const [musica, setMusica] = useState('');
  const [duracion, setDuracion] = useState(0);

  useEffect(()=>{
    const djEscojido = async () => {
      const token = localStorage.getItem('clienteTK');
      if(!token) return;

      const config = {
        headers: {
          'Content-Type' : 'application/json',
          Authorization  : `Bearer ${token}`
        }
      }

      try {
        const {data} = await baseAxios(`/cliente/pedido/${djId}`, config);
        setDjSeleccionado(data); 
      } catch (error) {
        console.log(error.response.data.msg);
      }
    }
    djEscojido();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if([evento, fecha, musica, duracion].includes('')){
      setErrores('Todos los campos son importantes');
      return;
    }

    if(Number(duracion) <= 0){
      setErrores('Falta indicar la duración');
      return;
    }

    const pedidoObj = {evento, fecha, musica, duracion};

    const token = localStorage.getItem('clienteTK');
    if(!token) return;

    const config = {
      headers: {
        'Content-Type' : 'application/json',
        Authorization  : `Bearer ${token}`
      }
    }

    try {
      await baseAxios.post(`/cliente/pedido/${djId}`, pedidoObj, config);
      setErrores('');
      setMensajes('Tu solicitud se envió correctamente');      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>      
      <uti.Titulo
        texto='Hacer Solicitud'
      />

      {Object.keys(djSeleccionado).length <= 0 ? (
        <uti.Spinket/>
      ) : (
        <>
          <div className='mt-6 lg:mt-12 lg:grid lg:grid-cols-2 lg:h-[40rem]  lg:gap-x-8'>
            <div className=' lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3'>
              {djSeleccionado.avatar?.data ? (
                <img src={avatarPerfil(djSeleccionado.avatar)} alt='DJ Foto' className=' object-cover h-80 md:h-[28rem] lg:h-[40rem]'/>
              ):(
                <div className='bg-gray-400 p-8 md:h-[28rem] lg:h-[40rem] md:flex md:flex-col md:justify-center'>
                  <p className='text-white uppercase font-bold text-center'>Sin Foto</p>
                  <div className='border-white border-2 rounded-full p-4 md:h-80 md:w-80 md:mx-auto'>
                    <img src={`${imagenDJ}`} alt='DJ sin foto' className=' mx-auto md:h-full'/>
                  </div>                      
                </div>  
              )}
            </div>


            <p className='text-xl txColorPrincipal font-bold uppercase my-4 text-center md:text-2xl lg:text-4xl'>
              <FontAwesomeIcon icon={faHeadphones} className=' mr-4' />
              DJ. {djSeleccionado.nombre}
            </p>            

            <div>
              {errores && <uti.ErrorAlerta> {errores} </uti.ErrorAlerta>}
              {mensajes && !errores && <uti.MsgAlerta> {mensajes} </uti.MsgAlerta>}

              <form
                onSubmit={(e) => handleSubmit(e)}
                className=' mt-2'
              >
                <uti.CampoSesiones
                  mBottom= 'mb-4'
                  labelCampo= 'Tipo de Evento:'
                  typeCampo= 'text'
                  placeHCampo= 'Ejemplo Matrimonio, Cumpleaños, etc'
                  valueCampo= {evento}
                  setValueCampo= {setEvento}
                />

                <uti.CampoSesiones
                  mBottom= 'mb-4'
                  labelCampo= 'Fecha del Evento:'
                  typeCampo= 'date'
                  placeHCampo= ''
                  valueCampo= {fecha}
                  setValueCampo= {setFecha}
                />

                <uti.CampoSesiones
                  mBottom= 'mb-4'
                  labelCampo= 'Estilos Musicales:'
                  typeCampo= 'text'
                  placeHCampo= 'Ejemplo Salsa, HipHop, etc'
                  valueCampo= {musica}
                  setValueCampo= {setMusica}
                />

                <uti.CampoSesiones
                  mBottom= 'mb-4'
                  labelCampo= 'Cantidad de Horas para el DJ:'
                  typeCampo= 'number'
                  placeHCampo= ''
                  valueCampo= {duracion}
                  setValueCampo= {setDuracion}
                />

                <div>
                  <input
                    type='submit'
                    value='Enviar'                  
                    className='botonEditarPerfil bg-violet-900 px-20 py-4 block mt-4 md:mt-6 md:hover:bg-violet-700 md:hover:cursor-pointer lg:mt-6'
                  />  
                </div>
              </form>

              <div className=' text-center mt-6 lg:mt-4'>
                <button
                  type='button'
                  onClick={() => navigate(-1)}
                  className=' txColorPrincipal font-bold'
                ><FontAwesomeIcon icon={faReply} /> Volver</button>
              </div>
            </div>

          </div>          
        </>
      )}
        
    </>
  )
}
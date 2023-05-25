import {createContext, useState} from 'react'
import baseAxios from '../config/axios';
import * as hooks from '../hooks';

const DjContext = createContext();

const DjProvider = ({children}) => {

    const {setDjPerfil, avatarPerfil} = hooks.useDjAuth();

    const [cargando, setCargando] = useState(true);
    const [djPedidos, setDjPedidos] = useState([]);
    const [errores, setErrores] = useState('');
    const [mensaje, setMensaje] = useState('');

    const editarPerfil = async (infoDj) => {
        const token = localStorage.getItem('djTK');
        if(!token) return;

        const config = {
            headers: {
                'Content-Type' : 'multipart/form-data',
                Authorization  : `Bearer ${token}`
            }
        }

        try {
            const {data} = await baseAxios.put('/dj/actualizar', infoDj, config);
            setDjPerfil(data);
            {data?.avatar && avatarPerfil(data.avatar)};
            setMensaje('Perfil Actualizado. Ya puede desactivar Editar Perfil');
            setTimeout(()=>{ setMensaje('') }, 4000);            
        } catch (error) {
            setErrores(error.response.data.msg);
        }
    }

    const listaPedidos = async () => {
        const token = localStorage.getItem('djTK');
        if(!token){
            setCargando(false);
            return
        };

        const config= {
            headers: {
                'Content-Type' : 'application/json',
                Authorization  : `Bearer ${token}`
            }
        }

        try {
            const {data} = await baseAxios('/dj/lista', config);
            setDjPedidos(data);            
        } catch (error) {
            setErrores(error.response.data.msg);
            setDjPedidos([]);
        }
        setCargando(false);
    }

    const actualizarPedido = async (pedido) => {
        const token = localStorage.getItem('djTK');
        if(!token) return;

        const config = {
            headers: {
                'Content-Type' : 'application/json',
                Authorization  : `Bearer ${token}`
            }
        }

        try {
            const {data} = await baseAxios.put(`/dj/aceptado/${pedido._id}`,pedido, config);
            setMensaje(data.msg);
            listaPedidos();
            setTimeout(()=>{ setMensaje('') }, 2000);            
        } catch (error) {
            setErrores(error.response.data.msg);                        
        }
    }

    return (
        <DjContext.Provider
            value={{
                djPedidos,
                setDjPedidos,
                cargando,
                errores,
                setErrores,
                mensaje,
                setMensaje,
                editarPerfil,
                listaPedidos,
                actualizarPedido
            }}
        >{children}</DjContext.Provider>
    )
};

export default DjContext;

export {DjProvider};
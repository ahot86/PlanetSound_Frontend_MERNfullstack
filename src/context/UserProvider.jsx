import {createContext, useState} from 'react';
import baseAxios from '../config/axios';
import {useNavigate} from 'react-router-dom';
import * as hooks from '../hooks';

const UserContext = createContext();

const UserProvider = ({children}) => {
    const navigate = useNavigate();
    const {setErrores, setMensajes} = hooks.useUserAuth();
    const [contar, setContar] = useState(0);
    const [listaDJs, setListaDJs] = useState([]);
    const [djSeleccionado, setDjSeleccionado] = useState({});
    const [pedidosCliente, setPedidosCliente] = useState([]);

    const cargarListaDJs = async () => {
        const token = localStorage.getItem('clienteTK');

        if(!token) return;

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${token}` 
            }
        }

        try {
            const {data} = await baseAxios('/cliente/lista-djs', config);
            setListaDJs(data);            
        } catch (error) {
            console.log(error);
        }
    };

    const avatarPerfil = (avatar) => {
        const base64String = btoa(
            String.fromCharCode(...new Uint8Array(avatar.data.data))
        );
        const base64Flag = 'data:image/jpeg;base64,';
        const imagenDj = base64Flag + base64String;
        return imagenDj;
    };

    const djEscojido = async(dj) => {
        setDjSeleccionado(dj);
        const idDJ = dj._id;
        setErrores('');
        setMensajes('');
        navigate(`/admin/cliente/pedido/${idDJ}`);
    } 

    const listaPedidosCliente = async () => {
        const token = localStorage.getItem('clienteTK');
        if(!token) return;

        const config = {
            headers: {
                'Content-Type' : 'application/json',
                Authorization  : `Bearer ${token}`
            }
        }

        try {
            const {data} = await baseAxios('/cliente/pedidos', config);
            setPedidosCliente(data);
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <UserContext.Provider
            value={{
                contar,
                setContar,
                listaDJs,
                djSeleccionado,
                setDjSeleccionado,
                pedidosCliente,
                cargarListaDJs,
                avatarPerfil,
                djEscojido,
                listaPedidosCliente
            }}
        >
            {children}
        </UserContext.Provider>
    )
};

export default UserContext;
export {
    UserProvider
}
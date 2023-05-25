import {useState, useEffect, createContext} from 'react';
import baseAxios from '../config/axios';
import {useNavigate} from 'react-router-dom';

const UserAuthContext = createContext();

const UserAuthProvider = ({children}) => {
    const navigate = useNavigate();

    const [cargando, setCargando] = useState(true);
    const [clientePerfil, setClientePerfil] = useState({});

    const [mensajes, setMensajes] = useState('');
    const [errores, setErrores] = useState('');

    const login = async(email, password) => {
        try {
            const {data} = await baseAxios.post('/cliente/login', {email, password});
            localStorage.setItem('clienteTK', data.token);
            setClientePerfil(data);
            setErrores('');
            navigate('/admin/cliente');            
        } catch (error) {
            setErrores(error.response.data.msg);
            setClientePerfil({});
        }
    }

    const logout = () => {
        localStorage.removeItem('clienteTK');
        setClientePerfil({});
    }

    useEffect(()=>{
        const autenticarCliente = async() => {
            const token = localStorage.getItem('clienteTK');

            if(!token){
                setCargando(false);
                return
            }

            const config = {
                headers: {
                    'Content-Type' : 'application/json',
                    Authorization  : `Bearer ${token}`
                }
            }

            try {
                const {data} = await baseAxios('/cliente/perfil', config);
                setClientePerfil(data);                                
            } catch (error) {
                console.log(error);
                setClientePerfil({});
            }
            setCargando(false);
        };
        autenticarCliente();
    }, []);

    return (
        <UserAuthContext.Provider
            value={{
                cargando,
                clientePerfil,
                login,
                logout,
                mensajes,
                setMensajes,
                errores,
                setErrores
            }}
        >
            {children}
        </UserAuthContext.Provider>
    )
};

export default UserAuthContext;

export {
    UserAuthProvider
}
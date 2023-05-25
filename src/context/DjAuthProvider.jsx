import {useState, useEffect, createContext} from 'react';
import baseAxios from '../config/axios';
import { useNavigate } from 'react-router-dom';

const DjAuthContext = createContext();

const DjAuthProvider = ({children}) => {
    const navigate = useNavigate();

    const [cargando, setCargando] = useState(true);
    const [djPerfil, setDjPerfil] = useState({});
    const [avatarDj, setAvatarDj] = useState('');
    const [errores, setErrores] = useState(null);

    const avatarPerfil = (avatar) => {
        const base64String = btoa(
          String.fromCharCode(...new Uint8Array(avatar.data.data))
        );
        const base64Flag = 'data:image/jpeg;base64,';
        setAvatarDj(base64Flag + base64String);
    }


    const login = async (email, password) => {
        try {
            const {data} = await baseAxios.post('/dj/login', {email, password});
            localStorage.setItem('djTK', data.token);      
            setDjPerfil(data);
            data.avatar.data?.data && avatarPerfil(data.avatar);
            setErrores(null);
            navigate('/admin/dj');            
        } catch (error) {
            setErrores(error.response.data.msg)
            setDjPerfil({});
        }
    }

    const logOut = () => {
        localStorage.removeItem('djTK');
        setDjPerfil({});
        setAvatarDj('');
    }


    useEffect(()=>{
        const autenticarDJ = async () => {            
            const token = localStorage.getItem('djTK');            
            if(!token){
                setCargando(false);
                return
            };
            const config = {
                headers: {
                    'Content-Type' : 'application/json',
                    Authorization  : `Bearer ${token}`
                }
            }
            try {
                const {data} = await baseAxios('/dj/perfil', config);
                setDjPerfil(data);
                if(typeof data.avatar === 'undefined' || data.avatar === null){
                    setCargando(false);
                    return;
                } 
                avatarPerfil(data.avatar);                             
            } catch (error) {
                console.log(error.response.data.msg);
                setDjPerfil({});
                setAvatarDj('');
            }
            setCargando(false);
        };
        autenticarDJ();
    }, []);


    return (

        <DjAuthContext.Provider
            value={{
                djPerfil,
                setDjPerfil,
                cargando,
                login,
                logOut,
                errores,
                setErrores,
                avatarDj,
                avatarPerfil
            }}
        >
            {children}
        </DjAuthContext.Provider>      
        
    )
}

export {
    DjAuthProvider
}

export default DjAuthContext;
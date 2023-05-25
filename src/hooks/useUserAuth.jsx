import {useContext} from 'react';
import UserAuthContext from '../context/UserAuthProvider';

export const useUserAuth = () => {
    return useContext(UserAuthContext);
};
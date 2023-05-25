import {useContext} from 'react';
import DjAuthContext from '../context/DjAuthProvider';

export const useDjAuth = () => {
    return useContext(DjAuthContext);
}


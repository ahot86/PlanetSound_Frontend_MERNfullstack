import {useContext} from 'react'
import DjContext from '../context/DjProvider'

export const useDj = () => {
    return useContext(DjContext);
};
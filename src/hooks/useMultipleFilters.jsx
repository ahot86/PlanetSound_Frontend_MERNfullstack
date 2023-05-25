import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/App.css';

export const useMultipleFilters = (listaMeses) => {
    const [state, setState] = useState('');
    const [arregloID, setArregloID] = useState([]);

    const handleButtonClick = (id) => {
        setArregloID([...arregloID, id]);
    };

    const MultipleFilters = () => (
        <div className='grid grid-cols-3 gap- md:grid-cols-6 '>
            {listaMeses.map(mes => (
                <button
                    type='button'
                    key={mes.id}
                    value={mes.id}
                    onClick={(e) => {setState(Number(e.target.value)), handleButtonClick(mes.id)}}
                    className='text-center txColorPrincipal font-bold text-sm md:uppercase lg:text-lg'
                ><FontAwesomeIcon icon={faCaretRight} className={`${arregloID.includes(mes.id) ? 'inline-block' : 'hidden'}`}/> {mes.mesNombre}</button>              
            ))}
        </div>
    );
    
    return [state, setState, setArregloID, MultipleFilters];
}

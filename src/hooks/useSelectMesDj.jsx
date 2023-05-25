import React, {useState} from 'react';
import '../styles/App.css';

export const useSelectMesDj = (label, meses) => {
    const [state, setState] = useState('');
    
    const SelectMeses = () => (
        <>
            <label className='font-bold text-xl txColorPrincipal block mb-2 md:mb-0 md:text-2xl md:inline md:mr-4'>{label}</label>
            <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                className='mb-4 w-full h-auto bordeColorPrimario border-2 rounded-2xl py-3 pl-2 txColorPrincipal font-bold focus:bordeColorPrimario focus:bg-gray-300 focus:border-[2px] outline outline-0 md:w-2/5'
            >
                <option value=''>Todos los meses</option>
                {meses.map(mes => (
                    <option
                        key={mes.id}
                        value={mes.id}
                    >{mes.mesNombre}</option>
                ))}
            </select>
        </>
    )

    return [state, SelectMeses];
}



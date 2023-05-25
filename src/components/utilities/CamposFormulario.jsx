import React from 'react'

export const CampoSesiones = ({mBottom, labelCampo, typeCampo, placeHCampo, valueCampo, setValueCampo}) => {
  return (
    <>
        <div className= {mBottom}>
          <label className='block font-bold'>{labelCampo}</label>
          <input
            type= {typeCampo}
            placeholder= {placeHCampo}
            value= {valueCampo}
            onChange={(e) => setValueCampo(e.target.value)}
            className='mt-2 border-2 border-violet-900 border-solid block w-full rounded-2xl py-1 px-3 bg-gray-200 focus:border-cyan-500 focus:bg-gray-300 focus:border-[3px] outline outline-0'
          />
        </div>
    </>
  )
}
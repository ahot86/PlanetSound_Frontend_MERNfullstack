import React from 'react'

export const MsgAlerta = ({children}) => {
  return (
    <>
        <div className=' bg-gradient-to-br from-cyan-500 to-cyan-800 text-center p-3 rounded-xl font-bold'>
            {children}
        </div>
    </>
  )
}

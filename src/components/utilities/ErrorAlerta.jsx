import React from 'react'

export const ErrorAlerta = ({children}) => {
  return (
    <>
        <div className=' bg-gradient-to-br from-red-400 to-red-600 text-center p-3 rounded-xl font-bold'>
            {children}
        </div>
    </>
  )
}

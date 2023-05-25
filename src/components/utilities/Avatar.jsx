import React from 'react'

export const Avatar = ({color, imagenAvatar}) => {
  return (
    <>
        <div className={`${color} p-4 rounded-full mx-auto`}>
          <img src={`${imagenAvatar}`} className='w-[4rem] md:w-[8rem]'/>
        </div>
    </>
  )
}

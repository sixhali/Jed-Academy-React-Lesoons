import React, { useState } from 'react'

function Colors() {
    const [activeColor , setActiveColor]=useState('')
    const colors = ['red', 'green', 'blue', 'yellow', 'blue', 'purple']

  return (
    <div>
        <div className='box'>
          {colors.map((colorName,index) => {
             return <div className={`Circle ${colorName}`} onClick={ ()=> setActiveColor(colorName)} key={index}></div>
          })}

        </div>
        <div className={`box-2 ${activeColor}`} ></div>
    </div>
  )
}

export default Colors
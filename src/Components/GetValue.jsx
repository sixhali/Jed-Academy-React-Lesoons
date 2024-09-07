import React from 'react'
import { useState } from 'react'

function GetValue() {
    const [val,setValue]=useState(1)
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(val);
        setValue(1)

    }
    
  return (
    <div>
        <div className='container'>
            <form className='form' onSubmit={handleSubmit}>
                <input value={val} type="number" min={1} onChange={e=>{
                    setValue(e.target.value)
                }} />
                <h2>{val}</h2>
                <button>Submit</button>
            </form>
            <div className='box'>
                {Array.from({length: val}).map((_,index)=>{
                    return <div className='Circle' key={index}></div>
                })}

            </div>
            
        </div>

    </div>
  )
}

export default GetValue
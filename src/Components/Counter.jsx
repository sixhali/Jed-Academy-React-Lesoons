import React, { useState } from 'react'

function Counter() {
    const [count,setCount] = useState(0)
    
    const decrement=()=>{
        if(count > 0 ){
            setCount(count -1)
        }
    }

    const increment=()=>{
      setCount(count +1)
    }
    

    const clean = ()=>{
        setCount(0)
    }
  return (
    <div className='decrementAndincrement'>
        <h2>{count}</h2>
        <div className='btn'>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={clean}>Clean</button>
        </div>
    </div>
  )
}

export default Counter
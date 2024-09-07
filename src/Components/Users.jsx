import React from 'react'
import { userss } from '../Db/db'


function Users() {
  return (
    <div>
    {
      userss.map(({id, name , lastname})=>{
        return (
          <div  key={id} className='users'>
            <p>{name} {lastname}</p>
          </div>
        )
      })
    }
    
  </div>
  )
}

export default Users
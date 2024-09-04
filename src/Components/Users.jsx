import React from 'react'
import { users } from '../Db/db'

function Users() {
  return (
    <div>
    {
      users.map(({id, name , lastname})=>{
        return (
          <div key={id} className='users'>
            <p>{name} {lastname}</p>
          </div>
        )
      })
    }
    
  </div>
  )
}

export default Users
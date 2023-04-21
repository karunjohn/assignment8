import React, { useState } from 'react'
import Navigation from './Navigation'
import axios from 'axios'
import Table from 'react-bootstrap/Table';

function Dashboard() {
  const apilink="https://jsonplaceholder.typicode.com/users"

  var [users,change]=useState(
    [

    ]
  )

  React.useEffect(
    ()=>{
      axios.get(apilink).then(
        (response)=>{
          change(response.data)
        }
      )
    },[]
  )
  return (
    <div><Navigation/>
    <div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>

      <tbody>
      {users.length > 0 && (
        
          users.map(user => (
            <tr>
             <td>{user.id}</td>
             <td>{user.name}</td>
             <td>{user.email}</td> 
             </tr>
          ))
        
      )}
       
      </tbody>
    </Table>
    </div>
    </div>
  )
}

export default Dashboard
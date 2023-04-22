import React, { useState } from 'react'
import Navigation from './Navigation'
import axios from 'axios'
import Table from 'react-bootstrap/Table';

function Dashboard() {
  const apilink="http://localhost:3000/api/employeelist"

  var [users,change]=useState( [] )

  React.useEffect( ()=>{
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
          <th>Name</th>
          <th>Position</th>
          <th>Location</th>
          <th>Salary</th>
        </tr>
      </thead>

      <tbody>
      {users.length > 0 && (
        
          users.map(user => (
            <tr>
             <td>{user.name}</td>
             <td>{user.position}</td>
             <td>{user.location}</td>
             <td>{user.salary}</td>
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
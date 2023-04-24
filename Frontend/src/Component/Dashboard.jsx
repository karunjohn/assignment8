import React, { useState } from 'react'
import Navigation from './Navigation'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate()

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
  // const update=(event)=>{

  //   console.log(event)
  //   let input= {}
  //   input.name=event.target.attributes.username;
  //   input.position=event.target.attributes.userposition;
  //   input.location=event.target.attributes.userlocation;
  //   input.salary=event.target.attributes.usersalary;
  //   console.log(input)
  //    axios.put("http://localhost:3000/api/employeelist", input).then(response=>//{alert("user updated")})
  //}
  const setUser=(id,name,place,designation,salary)=>{
    localStorage.setItem("_id",id);
    localStorage.setItem("name",name);
    localStorage.setItem("location",place);
    localStorage.setItem("position",designation);
    localStorage.setItem("salary",salary);
        
  }
  const deleteUser=(id,name,place,designation,salary)=>{
    
    axios.delete('/api/employeelist/'+id)
    .then(response =>{
        if(response.status === 200){
            console.log("inside axios")
             alert("Deleted successfully")
            navigate('/')
            
            window.location.reload(true)
           
          
            console.log("delete")
           
        }
        else{
            alert("Update Failed")
        }
    })
  }

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
             <td>
              <Link to={'/update'}>
              <Button variant="primary" onClick={() => setUser(user._id, user.name, user.email, user.location, user.position, user.salary)}>
        Update
      </Button>
      </Link>
      <Button variant="danger" onClick={() => deleteUser(user._id, user.name, user.email, user.location, user.position, user.salary)}>
        Delete 
      </Button>
      
      </td>
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
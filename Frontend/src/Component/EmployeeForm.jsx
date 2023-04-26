import React, { useState } from 'react'
import Navigation from './Navigation'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




function EmployeeForm() {

  
    const[input,changeInput]=useState({})
    const navigate = useNavigate()
  
    const changeData=(event)=>{
      console.log(event)
      console.log(event.target.name)
      changeInput({...input,[event.target.name]:event.target.value
  
      })
      console.log(input)
  
    }
    


  
  const clickSubmit=()=>{
    console.log(input)
    axios.post("http://localhost:3000/api/employeelist", input).then(response=>{changeInput(response.data)
    if(response.status === 200){
      navigate('/')
      console.log("inside axios")
      alert("Employee Created")   
     
  }
    })
  }
  return (
    <div><Navigation/>
    <div>
    <Container>
      <br />
    <Row>
      
        <Col md={6}>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Name"  onChange={changeData} name='name' />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDesignation">
        <Form.Label>Position</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Designation" onChange={changeData} name='position'/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLocation">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Location"  onChange={changeData} name='location'/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicSalary">
        <Form.Label>Salary</Form.Label>
        <Form.Control type="number" placeholder="Enter Your Salary"  onChange={changeData} name='salary'/>
      </Form.Group>

      
      <Button variant="primary" onClick={clickSubmit}>
        Submit
      </Button>
    </Form>
        </Col>

      </Row>
   
    </Container>
   

    </div>
    </div>
  )
}

export default EmployeeForm
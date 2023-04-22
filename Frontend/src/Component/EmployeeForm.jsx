import React, { useState } from 'react'
import Navigation from './Navigation'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';




function EmployeeForm() {
  
    const[input,changeInput]=useState({})
  
    const changeData=(event)=>{
      changeInput({...input,[event.target.name]:event.target.value
  
      })
  
    }
  
  const clickSubmit=()=>{
    axios.post("http://localhost:3000/api/employeelist", input).then(response=>{changeInput(response.data)})
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
        <Form.Control type="text" placeholder="Enter Your Name"  onChange={changeData} />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDesignation">
        <Form.Label>Designation</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Designation" onChange={changeData}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLocation">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Location"  onChange={changeData} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicSalary">
        <Form.Label>Salary</Form.Label>
        <Form.Control type="number" placeholder="Enter Your Salary"  onChange={changeData} />
      </Form.Group>

      
      <Button variant="primary" type="submit" onClick={clickSubmit}>
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
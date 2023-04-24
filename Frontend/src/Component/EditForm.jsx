import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import Navigation from './Navigation';

const EditForm = () => {
    const navigate = useNavigate()
    const [name,setName] = useState('')
    
    const [location,setLocation] = useState('')
    const [position,setPosition] = useState('')
    const [salary,setSalary] = useState('')
    const [_id,setId] = useState(null)
    console.log("first")
    console.log(_id)

    // eslint-disable-next-line no-unused-vars
    const [userToken,settoken] = useState(sessionStorage.getItem("userToken"))


    // const apiUrl="http://localhost:3001/changeData"

    useEffect(() =>{
        setName(localStorage.getItem("name"))
       
        setLocation(localStorage.getItem("location"))
        setPosition(localStorage.getItem("position"))
        setSalary(localStorage.getItem("salary"))
        setId(localStorage.getItem("_id"))
        console.log("inside useEffect")
        
    },[])

    const setDataToApi = ()=>{
        const employeeData = {
            "_id": _id,
            "name" : name,
           
            "location" : location,
            "position" : position,
            "salary" : salary,
            "token": userToken
        }
        axios.put('/api/employeelist',employeeData)
        .then(response =>{
            if(response.status === 200){
                console.log("inside axios")
                navigate('/api/employeelist')
                window.location.reload(true)
            }
            else{
                alert("Update Failed")
            }
        })
    }
   
  return (
    <div>
        <Navigation/>
        <div className="container ">
            <div className="row g-3" style={{margin: "40px 10px 0 10px"}}>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3 position-absolute top-50 start-50 translate-middle">
                        <div className="col-12">
                            <label htmlFor="" className='form-label'>NAME</label>
                            <input name='name' type="text" value={name} className="form-control" onChange={(e)=> setName(e.target.value)} />
                        </div>
                        
                        <div className="col-12">
                            <label htmlFor="" className='form-label'>DESIGNATION</label>
                            <input name='position' type="text" value={position} className="form-control" onChange={(e)=> setPosition(e.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="" className='form-label'>LOCATION</label>
                            <input name='location' type="text" value={location} className="form-control" onChange={(e)=> setLocation(e.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="" className='form-label'>SALARY</label>
                            <input name='salary' type="text" value={salary} className="form-control" onChange={(e)=> setSalary(e.target.value)} />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={setDataToApi} className="btn btn-warning"> UPDATE </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditForm
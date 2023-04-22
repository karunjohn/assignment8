
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Component/Dashboard';
import EmployeeForm from './Component/EmployeeForm';
import React from 'react';
import axios from 'axios';
import EditForm from './Component/EditForm';


function App() {
  
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={
    <Dashboard/>
    }/>
    <Route path="/form" element={<EmployeeForm/>}/>
    <Route path="/update" element={<EditForm/>}/>
   </Routes>
</BrowserRouter>
  );
}

export default App;

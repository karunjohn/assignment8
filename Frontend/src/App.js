
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Component/Dashboard';
import EmployeeForm from './Component/EmployeeForm';


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={
    <Dashboard/>
    }/>
    <Route path="/form" element={<EmployeeForm/>}/>
   </Routes>
</BrowserRouter>
  );
}

export default App;

// Task1: initiate app and run server at 3000
const express=require('express')
const app=express()

const logger=require('morgan')


app.use(express.json())//parse json data
app.use(express.urlencoded({extended:true}))


app.listen(3000,()=>{
    console.log('server is running at port 3000')
})

const path=require('path');
app.use(express.static(path.join(__dirname+'/dist/FrontEnd')));
//logger
app.use(logger('combined'))
// Task2: create mongoDB connection 
const mongoose = require('mongoose');
main().catch(err => console.log(err));

async function main() {
 // await mongoose.connect('mongodb://127.0.0.1:27017/test');
  
   await mongoose.connect('mongodb+srv://karunkjohn:qwerty123@cluster0.2ucz2a9.mongodb.net/test');
}
//importing model
const employeeData=require('./model/employee')


//Task 2 : write api with error handling and appropriate api mentioned in the TODO below







//TODO: get data from db  using api '/api/employeelist'
app.get('/api/employeelist',async(req,res)=>{
    try {
      const employeelist= await employeeData.find({})
      res.send(employeelist)
        
    }catch (error) {
        console.log(error)
        res.json('Error')
        
    }

})



//TODO: get single data from db  using api '/api/employeelist/:id'

app.get('/api/employeelist/:id',async(req,res)=>{
    try {
      const employeelist= await employeeData.findById(req.params.id)
      res.send(employeelist)
        
    }catch (error) {
        console.log(error)
        res.json('Error')
        
    }

})




//TODO: send data from db using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}

app.post('/api/employeelist',async(req,res)=>{
    try {
        console.log(req.body)
        const {name, location, position, salary} = req.body

        const employeelist= await employeeData.create({name,location,position,salary})
        res.send(employeelist)
        console.log('hai')


    } catch (error) {
        console.log(error)
        res.json('Error')
    }
})




//TODO: delete a employee data from db by using api '/api/employeelist/:id'

app.delete('/api/employeelist/:id',async(req,res)=>{
    try {
      const employeelist= await employeeData.findByIdAndDelete(req.params.id)
      res.send(employeelist)
        
    }catch (error) {
        console.log(error)
        res.json('Error')
        
    }

})




//TODO: Update  a employee data from db by using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}

app.put('/api/employeelist',async(req,res)=>{
    try {
        const id=req.body._id
    const {name, location, position, salary} = req.body

      const employeelist= await employeeData.findByIdAndUpdate(id, { name,location,position,salary})
      res.send(employeelist)
      console.log(employeelist)
        
    }catch (error) {
        console.log(error)
        res.json('Error')
        
    }

})
//! dont delete this code. it connects the front end file.
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/Frontend/index.html'));
});




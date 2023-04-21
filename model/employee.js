const mongoose = require('mongoose');
const schema=mongoose.Schema;

//creating new schema for model
let employeeDetails= new schema(
    {
        name:{type:String},
        location:{type:String},
        position:{type:String},
        salary:{type:Number}
    }
)
const employeeData=mongoose.model('employe data',employeeDetails)//model('collectionName',schemaName)
module.exports=employeeData
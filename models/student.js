const mongoose = require("mongoose")
const { Schema } = mongoose;

//studentSchema
const studentSchema = new Schema({
  roll: {
    type : Number,
    unique : true
  } ,
  name: String,     
  dob:{
    type:String
  } ,
  score:Number 
});

module.exports = mongoose.model("Student", studentSchema)
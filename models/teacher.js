const mongoose = require("mongoose")
const { Schema } = mongoose;

//teacherSchema 
const teacherSchema = new Schema({
  name: {
    type : String,
    required:[true,"please enter the valid name"],
    unique : true
  } ,
  password: {
    type :String,
    required:[true,"please enter the valid password"]
  }
});








//exporting the model
module.exports = mongoose.model("teacher", teacherSchema)
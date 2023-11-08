const { validationResult, check } = require('express-validator');
const Student = require('../models/student');

//student login get
const student_login_get = (req, res) => {
       res.render("student/login",{errors:'',roll:'',date:''});
    };


//student login post
const student_login_post = async (req, res) => {

        const Sturoll = req.body.roll;  
        const studate = req.body.dob; 
        const errors = validationResult(req)
        const individualStudent = await Student.findOne({roll : Sturoll});   
        const date = await Student.findOne({dob :studate });
        
        //checking student rollno and date
        if(individualStudent && date){
         res.render("student/view", { student : individualStudent});
        } else{
      
          res.render("student/login",{errors: errors.mapped(),roll:'roll number error',date:'date error'})
        }
        
        
        
    };


module.exports={
    student_login_get,
    student_login_post
}
const { validationResult, check } = require('express-validator');
const Student = require('../models/student');
const Teacher = require('../models/teacher');
const jwt = require('jsonwebtoken');

  

 //token creation
 const createToken = (id) =>{
    return jwt.sign({id},'teacher secret')
 }




//teacher login get
const teacher_login_get = (req, res) => {

    res.render("teacher/teacherLogin",{errors:'',errs:'',passworderror:''});
   
};


//teacher login post
const teacher_login_post =  async (req, res) => {
   


const tname = req.body.name;  
const tpassword = req.body.password;
const errors = validationResult(req)
const errs = "corect"
        const individualTeacher = await Teacher.findOne({name : tname});   
        const password = await Teacher.findOne({password :tpassword });
        


        try {
            const token = createToken(individualTeacher._id)
        res.cookie('jwt',token)
        console.log(individualTeacher._id)
        } catch (error) {
            res.render('teacher/teacherLogin',{errors: errors.mapped(),errs:"login error",passworderror:"password errror"}) 
        }
        
            //checking teacher credentials
            if(individualTeacher && password ){
                res.redirect("/teacher/option")
      
              } 
        else{
        
            
            res.render('teacher/teacherLogin',{errors: errors.mapped(),errs:"login error",passworderror:"password errror"}) 
            console.log(errors)
            console.log(errs)
        }
               








};




//teacher viewall get
const teacher_viewall_get = async (req, res) => {
    const allStudents = await Student.find() 
    res.render("teacher/viewall", {student : allStudents})
};


//teacher edit get
const teacher_edit_get =async (req, res) => {
    const user = await Student.findById(req.params.id)
    console.log(user)
    res.render("teacher/edit", {user : user})
};

//teacher edit post
const teacher_edit_post =async (req, res) => {
    const user = await Student.findByIdAndUpdate(req.params.id,req.body)
    console.log(user)
    res.redirect("/teacher/viewall")
};

//teacher delete get
const teacher_delete_get =async (req, res) => {
    await Student.findByIdAndDelete(req.params.id)
    res.redirect("/teacher/viewall")
};

//teacher option get
const teacher_option_get = (req,res) => {
    res.render("teacher/option",{success : ''})
};

//teacher add get
const teacher_add_get = (req, res) => {
    res.render("teacher/addstudent",{roll:''});
};

//teacher add post
const teacher_add_post = async (req, res) => {
    const singleStudent = new Student({
        name : req.body.name,  
        roll : req.body.roll,             
        dob : req.body.dob,
        score : req.body.score        
    })
    try {
        const newStudent = await singleStudent.save();
        res.redirect("/teacher/add");
      } catch {
        res.send('these Roll number already exists!!!!!')
    }
};


const teacher_logout = async (req,res) =>{
    try {
        res.cookie('jwt','',{maxAge:1});
        res.redirect('/')
        
    
        
    } catch (error) {
        res.redirect('/')
    }
}

//exporting teacher controller functions
module.exports={
    teacher_login_get,
    teacher_login_post,
    teacher_viewall_get,
    teacher_edit_get,
    teacher_edit_post,
    teacher_delete_get,
    teacher_add_post,
    teacher_add_get,
    teacher_option_get,
    teacher_logout
    
}
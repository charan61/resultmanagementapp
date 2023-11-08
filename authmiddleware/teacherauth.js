const jwt = require('jsonwebtoken');

//function for checking the jwt token
const requireAuth = (req,res,next) =>{
    const token = req.cookies.jwt;


    if(token){
        jwt.verify(token,'teacher secret',(err,decodedToken)=>{
            if(err){
                res.render('teacher/teacherLogin',{errors:'',errs:'',passworderror:''}) 
            }
            else{
                next();
            }
        })
    }
    else{

        res.render('teacher/teacherLogin',{errors:'',errs:'',passworderror:''}) 
    }


}



module.exports = {requireAuth}
















$('#editstudent').submit(function(event){
    alert("Student updated successfully");
})

//delete student alert

// $('#deletestudent').submit(function(event){
//     alert("Student deleted successfully");
// })

$('.table tbody td a.delete').on('click', function() {
    var choice = confirm('Do you really want to delete this record?');
    if(choice === true) {
        return true;
    }
    return false;
});

// const {teacher_add_post} = require('../controllers/teacherController')
// //add student alert
// $('#addstudent').submit(function(event){

//    if(teacher_add_post){
//     alert("Student inserted successfully");
//    }
//    else{
//     alert("these rollno already exitss");
//    }

   
// })

//edit student alert

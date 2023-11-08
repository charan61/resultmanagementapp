var express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');
const { check } = require('express-validator');
const {requireAuth} = require('../authmiddleware/teacherauth')





router.get('/login',teacherController.teacher_login_get);
router.post('/login',[
    check('name').notEmpty().withMessage('enter valid teacher name'),
  
    check('password').notEmpty().withMessage('enter valid password')
],teacherController.teacher_login_post);


router.get('/viewall',requireAuth,teacherController.teacher_viewall_get);
router.get('/edit/:id',requireAuth,teacherController.teacher_edit_get);
router.post('/edit/:id',requireAuth,teacherController.teacher_edit_post);
router.get('/delete/:id',requireAuth,teacherController.teacher_delete_get);

router.get('/option',requireAuth,teacherController.teacher_option_get);
router.post('/add',requireAuth,teacherController.teacher_add_post);
router.get('/add',requireAuth,teacherController.teacher_add_get);

router.get('/logout',requireAuth,teacherController.teacher_logout);

module.exports = router;
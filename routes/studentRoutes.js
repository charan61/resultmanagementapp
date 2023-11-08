var express = require("express");
const router = express.Router();
const studentController = require('../controllers/studentController');
const { check } = require('express-validator');

router.get('/login',studentController.student_login_get);
router.post('/login',[
    check('roll').notEmpty().withMessage('enter valid roll no'),
    check('dob').notEmpty().withMessage('enter valid date')
],studentController.student_login_post);

module.exports = router;
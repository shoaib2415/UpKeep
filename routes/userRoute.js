const express=require('express');
const { loginController,registerController } = require('../controllers/userController');

//router object
const router=express.Router()

//router
//post or login

router.post('/login',loginController);
//post or register
router.post('/register',registerController);
module.exports=router;
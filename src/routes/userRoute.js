const express = require('express');
const UserControllers = require('../controllers/userControllers');


const userRouter = express.Router();

userRouter
     .post('/', UserControllers.createUser)




module.exports = userRouter;
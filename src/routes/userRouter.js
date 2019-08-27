const express = require('express');
const controllers = require('../controllers/userControllers');


const userRouter = express.Router();

userRouter
     .post('/', controllers.createUser)





module.exports = userRouter;
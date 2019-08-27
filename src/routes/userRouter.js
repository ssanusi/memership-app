const express = require('express');
const controllers = require('../controllers');
const validators = require('../middleware');

const userRouter = express.Router();

userRouter
     .post('/', validators.validateUserData, controllers.createUser)





module.exports = userRouter;
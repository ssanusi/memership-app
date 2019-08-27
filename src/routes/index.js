const express = require('express');
const userRouter = require('./userRouter');
const planRouter = require('./planRouter')
const controllers = require('../controllers')
const validators = require('../middleware')

const rootRouter = express.Router();

rootRouter.use('/user', userRouter)
          .use('/plan', planRouter )
          .get('/membership', validators.validateGetMembership, controllers.getUserByPlan)




module.exports = rootRouter;
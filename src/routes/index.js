const express = require('express');
const userRouter = require('./userRouter');
const planRouter = require('./planRouter')
const controllers = require('../controllers')

const rootRouter = express.Router();

rootRouter.use('/user', userRouter)
          .use('/plan', planRouter )
          .get('/membership', controllers.getUserByPlan)




module.exports = rootRouter;
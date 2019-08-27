const express = require('express');
const controllers = require('../controllers');
const validators = require('../middleware')

const planRouter = express.Router();

planRouter
      .post('/', validators.validateAddPlan,controllers.createPlan);



module.exports = planRouter;
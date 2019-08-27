const express = require('express');
const controllers = require('../controllers');


const planRouter = express.Router();

planRouter
      .post('/', controllers.createPlan);



module.exports = planRouter;
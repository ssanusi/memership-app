const express = require('express');
const PlanControllers = require('../controllers/planControllers');


const planRouter = express.Router();

planRouter
      .post('/', PlanControllers.createPlan);



module.exports = planRouter;
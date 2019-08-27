const Validator = require('validatorjs');


const validateUserData = (req, res, next) => {
  const { firstName, lastName, dob } = req.body

  const rules = {
    firstName : 'string|required',
    lastName: 'string|required',
    dob: 'string|required'
  }

  let validator = new Validator({ firstName, lastName, dob }, rules, {})

  if(validator.fails()){
    return res.status(400).json({error : validator.errors.errors })
  }
 return next()
}

const validateAddPlan = ( req, res, next) => {
  const { userId, membershipName, membershipType, membershipStartDate, membershipEndDate } = req.body

  const rules = {
    userId: 'integer|required',
    membershipName: 'string|required',
    membershipType: 'string|required',
    membershipStartDate : 'string|required',
    membershipEndDate : 'string|required'
  }

  let validator = new Validator({ userId, membershipName, membershipType, membershipStartDate, membershipEndDate }, rules, {})

  if(validator.fails()){
    return res.status(400).json({error : validator.errors.errors })
  }
 return next()

}

const validateGetMembership = ( req, res, next) => {
  const { membershipName } = req.body

  const rules = {
    membershipName: 'string|required',
  }

  let validator = new Validator({ membershipName }, rules);

  if(validator.fails()){
    return res.status(400).json({error : validator.errors.errors })
  }
 return next()

}

module.exports = {
  validateUserData,
  validateAddPlan,
  validateGetMembership
}
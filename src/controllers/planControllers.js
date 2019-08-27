const { plan } = require('../../database/models');

class PlanControllers {
  static async createPlan (req, res) {
    console.log(req.body);
    const {
      userId,
      membershipName,
      membershipType,
      membershipStartDate,
      membershipEndDate
    } = req.body
    try {
      const createdPlan = await plan.create({
        userId,
        membershipName,
        membershipType,
        membershipStartDate,
        membershipEndDate
      }, { returning: true })

        if(createdPlan) {
          return res.status(201).json({ message : `Plan created successfully` , plan : createdPlan })
        }
    } catch (error) {
      return res.status(400).json({ error : error.message })
    }

  }
}

module.exports = PlanControllers;
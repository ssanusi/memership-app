const { user, plan } = require('../../database/models');

const createPlan = async ( req, res ) => {
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

const createUser = async ( req, res ) => {
  const { firstName, lastName, dob } = req.body;
    try {
      const createdUser = await user.create(
        { firstName, lastName, dob },
        { returning: true }
      );

      if (createdUser) {
        return res.status(201).json({ user: createdUser });
      }
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
}

const getUserByPlan = async (req, res) => {
  const { membershipName } = req.body;
    try {
      const membershipList = await plan.findAll({
        where: {
          membershipName,
        },
        attributes : ['userId'],
        include: [
          {
            model: user,
            as: "user",
            attributes : ['firstName', 'lastName']
          }
        ]
      });

      if (membershipList) {
        return res.status(200).json({ membershipList });
      }
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
}

module.exports = {
  createPlan,
  createUser,
  getUserByPlan
}


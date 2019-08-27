const { user } = require('../../database/models');

class UserControllers {
  static async createUser (req, res) {
    const { firstName, lastName, dob }  = req.body;
    try {
      const createdUser = await user.create({firstName, lastName, dob },{ returning : true} );

      if(createdUser){
        return res.status(201).json({ user : createdUser })
      }

    } catch (error) {
        return res.status(400).json({ error : error.message })
    }
  }
}

module.exports = UserControllers;
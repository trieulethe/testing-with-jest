const UserModel = require('../models/user')

exports.create = async (req, res, next) => {
  try {
    const body = req.body
    const instance = new UserModel()
    instance.email = body.email
    const password = await UserModel.encryptPassword(body.password)
    instance.password = password
    instance.phone_number = body.phoneNumber
    await instance.save()
    res.json({
      data: instance
    })
  } catch (error) {
    console.log('error:', error)
    throw error
  }
  
}

exports.get = async () => {}

exports.update = async () => {}

exports.del = async () => {}




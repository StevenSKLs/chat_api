const UsersServices = require("../services/user.services")

const createUser = async (req, res) => {
  try {
    const newUser = req.body
    const result = await UsersServices.create(newUser)
    res.status(201).json(result)
  } catch (error) {
    next(error)
  }
}

const updateUser = async (req, res) => {
  try {
    const { id } = req.params
    const { name, lastname } = req.body
    await UsersServices.update(id, { name, lastname })
    res.status(204).send()
  } catch (error) {
    res.status(400).json(error)
  }
}

module.exports = {
  createUser,
  updateUser,
}

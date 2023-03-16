const AnswerServices = require("../services/messages.services")

const createAnswer = async (req, res, next) => {
  try {
    const newAnswer = req.body
    const answer = await AnswerServices.create(newAnswer)
    res.status(201).json(answer)
  } catch (error) {
    next(error) 
  }
}

const deleteAnswer = async (req, res) => {
  try {
    const { id } = req.params
    await AnswerServices.delete(id)
    res.status(204).send()
  } catch (error) {
    next(error)
  }
}

module.exports = {
  createAnswer,
  deleteAnswer,
}

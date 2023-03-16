const { Router } = require("express")
const {
  createUserValidator,
  updateUserValidator,
} = require("../validators/user.validators")

const { createUser, updateUser } = require("../controllers/user.controllers")

const router = Router()

router.post("/api/v1/users", createUserValidator, createUser) 
router.put("/api/v1/users/:id", updateUserValidator, updateUser)

module.exports = router


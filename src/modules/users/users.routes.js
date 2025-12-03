const express = require('express')
const Joi = require('joi')
const router = express.Router()
const usersController = require('./users.controller')
const validateBody = require('../../middlewares/validateBody')

const createUserSchema = Joi.object({
	name: Joi.string().min(3).max(30).required(),
	role: Joi.string().valid('Jedi', 'Senator', 'Sith').required(),
})

router.get('/', usersController.getAll)
router.post('/', validateBody(createUserSchema), usersController.create)

module.exports = router

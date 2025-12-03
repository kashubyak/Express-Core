const express = require('express')
const router = express.Router()
const UsersController = require('./users.controller')

router.get('/', UsersController.getAll)
router.post('/', UsersController.create)

module.exports = router

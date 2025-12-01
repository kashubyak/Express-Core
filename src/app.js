const express = require('express')
const usersRouter = require('./modules/users/users.routes')
const errorHandler = require('./middlewares/errorHandler')

const app = express()
app.use(express.json())

app.use('/users', usersRouter)
app.use(errorHandler)

module.exports = app

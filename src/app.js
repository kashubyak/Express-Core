const express = require('express')
const usersRouter = require('./modules/users/users.routes')
const errorHandler = require('./middlewares/errorHandler')
const ApiError = require('./utils/ApiError')
const authRouter = require('./modules/auth/auth.routes')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
	console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`)
	next()
})

app.get('/ping', (req, res) => res.send('pong'))
app.use('/users', usersRouter)
app.use('/auth', authRouter)
app.use((req, res, next) => {
	next(ApiError.NotFound('Route not found'))
})

app.use(errorHandler)

module.exports = app

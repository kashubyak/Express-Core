const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const requestId = require('./middlewares/requestId')
const logger = require('./utils/logger')
const notFoundHandler = require('./middlewares/notFoundHandler')
const errorHandler = require('./middlewares/errorHandler')

const usersRouter = require('./modules/users/users.routes')
const authRouter = require('./modules/auth/auth.routes')

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(requestId)

app.use((req, res, next) => {
	logger.info(`Incoming Request`, {
		method: req.method,
		url: req.url,
		requestId: req.id,
	})
	next()
})

app.get('/health', (req, res) => {
	res.status(200).json({ status: 'OK', uptime: process.uptime() })
})

app.get('/ping', (req, res) => res.send('pong'))
app.use('/users', usersRouter)
app.use('/auth', authRouter)

app.use(notFoundHandler)
app.use(errorHandler)

module.exports = app

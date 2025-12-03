const express = require('express')
const usersRouter = require('./modules/users/users.routes')
const authRouter = require('./modules/auth/auth.routes')
const errorHandler = require('./middlewares/errorHandler')
const notFoundHandler = require('./middlewares/notFoundHandler')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
	console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`)
	next()
})

app.get('/ping', (req, res) => res.send('pong'))
app.use('/auth', authRouter)
app.use('/users', usersRouter)

app.use(notFoundHandler)
app.use(errorHandler)

module.exports = app

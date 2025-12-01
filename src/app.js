const express = require('express')
const usersRouter = require('./modules/users/users.routes')
const app = express()

app.use(express.json())

app.use((req, res, next) => {
	console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`)
	next()
})

app.get('/ping', (req, res) => res.send('pong'))
app.use('/users', usersRouter)

app.use((req, res) => {
	res.status(404).json({ message: 'Route not found' })
})

app.use((err, req, res, next) => {
	console.error(err.stack)
	res.status(500).json({ message: 'Internal Server Error' })
})

module.exports = app

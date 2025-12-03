const express = require('express')
const app = express()

app.use(express.json())

app.use((req, res, next) => {
	console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`)
	next()
})

app.get('/ping', (req, res) => res.send('pong'))

app.get('/users', (req, res) => {
	res.json([
		{ id: 1, name: 'Anakin', role: 'Jedi' },
		{ id: 2, name: 'Padme', role: 'Senator' },
	])
})

app.use((err, req, res, next) => {
	console.error(err.stack)
	res.status(500).json({ message: 'Internal Error' })
})

module.exports = app

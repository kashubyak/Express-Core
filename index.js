const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

app.get('/ping', (req, res) => {
	res.send('pong')
})

app.get('/users', (req, res) => {
	const users = [
		{ id: 1, name: 'Alice', role: 'JEDI' },
		{ id: 2, name: 'Bob', role: 'SITH' },
	]
	res.json(users)
})

app.use((req, res) => {
	const time = new Date().toString()
	console.log(`[${time}] ${req.method} ${req.url}`)
	next()
})

app.use((err, req, res, next) => {
	console.error(err.stack)
	res.status(500).json({ message: 'Internal Server Error', error: err.message })
})

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})

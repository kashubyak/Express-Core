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

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})

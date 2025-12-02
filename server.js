const app = require('./src/app')
const config = require('./src/config/config')
const redisClient = require('./src/utils/redis')

const startServer = async () => {
	try {
		await redisClient.connect()
		app.listen(config.port, () => {
			console.log(`Server is running on port ${config.port} in ${config.env} mode!`)
		})
	} catch (error) {
		console.error('Failed to start server:', error)
		process.exit(1)
	}
}

startServer()

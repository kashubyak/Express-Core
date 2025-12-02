const usersRepository = require('./users.repository')
const redisClient = require('../../utils/redis')

class UsersService {
	async getAllUsers() {
		return usersRepository.getAllUsers()
	}
	async createUser(user) {
		return usersRepository.createUser(user)
	}

	async getUserById(id) {
		const cacheKey = `user:${id}`
		const cachedData = await redisClient.get(cacheKey)

		if (cachedData) {
			console.log(`Serving user ${id} from REDIS`)
			return JSON.parse(cachedData)
		}

		console.log(`Serving user ${id} from DB`)
		const user = await usersRepository.findById(id)

		if (user) await redisClient.setEx(cacheKey, 3600, JSON.stringify(user))

		return user
	}
}

module.exports = new UsersService()

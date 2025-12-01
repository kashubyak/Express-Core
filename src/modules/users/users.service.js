const usersRepository = require('./users.repository')

class UsersService {
	async getAllUsers() {
		return usersRepository.getAllUsers()
	}
	async createUser(user) {
		return usersRepository.createUser(user)
	}
}

module.exports = new UsersService()

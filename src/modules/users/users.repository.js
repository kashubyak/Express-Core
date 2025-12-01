const users = [
	{
		id: 1,
		name: 'Anakin',
		email: 'ani@jedi.com',
		password: '$2b$10$fS...hash...',
		role: 'Jedi',
	},
]

class UsersRepository {
	async getAllUsers() {
		return users
	}

	async findByEmail(email) {
		users.find(user => user.email === email)
	}

	async findById(id) {
		return users.find(user => user.id === id)
	}

	async createUser(user) {
		const newUser = { id: users.length + 1, ...user }
		users.push(newUser)
		return newUser
	}
}

module.exports = new UsersRepository()

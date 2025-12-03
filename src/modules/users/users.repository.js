const users = [
	{ id: 1, name: 'Anakin', role: 'Jedi' },
	{ id: 2, name: 'Padme', role: 'Senator' },
]

class UsersRepository {
	async getAllUsers() {
		return users
	}
	async createUser(user) {
		const newUser = { id: users.length + 1, ...user }
		users.push(newUser)
		return newUser
	}
}
module.exports = new UsersRepository()

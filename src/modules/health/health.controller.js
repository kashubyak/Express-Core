class HealthController {
	getHealth(req, res) {
		res.status(200).json({ status: 'OK', uptime: process.uptime() })
	}

	getPing(req, res) {
		res.send('pong')
	}
}

module.exports = new HealthController()

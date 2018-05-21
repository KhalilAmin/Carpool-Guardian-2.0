const Teacher = require('../models/teacher');

const LocalStrategy = require('passport-local').Strategy

const teacherstrategy = new LocalStrategy(
	{
		usernameField: 'email' // not necessary, DEFAULT
	},
	function(email, password, done) {
		Teacher.findOne({ 'email': email }, (err, teacherMatch) => {
			if (err) {
				return done(err)
			}
			if (!teacherMatch) {
				return done(null, false, { message: 'Incorrect username' })
			}
			if (!teacherMatch.checkPassword(password)) {
				return done(null, false, { message: 'Incorrect password' })
			}
			return done(null, teacherMatch)
		})
	}
)

module.exports = teacherstrategy
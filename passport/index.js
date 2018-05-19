const passport = require('passport')
const LocalStrategy = require('./localStrategy')
const teacherStrategy = require('./teacherstrategy')
// const GoogleStratgey = require('./googleStrategy')
const User = require('../db/models/user')
const Teacher = require('../db/models/teacher');

passport.serializeUser((user, done) => {
	console.log('=== serialize ... called ===')
	console.log(user) // the whole raw user object!
	console.log('---------')
	done(null, { _id: user._id })
})

passport.deserializeUser((id, done) => {
	(User.findOne(
		{ _id: id } === null)) ?
	Teacher.findOne(
		{ _id: id },
		'firstName lastName photos email',
		(err, user) => {
			console.log('======= DESERIALIZE USER CALLED ======')
			console.log(user)
			console.log('--------------')
			done(null, user)
		}
	) :
	User.findOne(
		{ _id: id },
		'firstName lastName photos email',
		(err, user) => {
			console.log('======= DESERIALIZE USER CALLED ======')
			console.log(user)
			console.log('--------------')
			done(null, user)
		}
	)

})



// ==== Register Strategies ====
passport.use('local', LocalStrategy)
passport.use('local.teacher', teacherStrategy)
// passport.use(GoogleStratgey)

module.exports = passport

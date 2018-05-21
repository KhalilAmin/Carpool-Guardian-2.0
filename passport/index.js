const passport = require('passport')
const LocalStrategy = require('./localStrategy')
const teacherStrategy = require('./teacherstrategy')
// const GoogleStratgey = require('./googleStrategy')
const Guardian = require('../models/guardian')
const Teacher = require('../models/teacher');

passport.serializeUser((user, done) => {
	console.log('=== serialize ... called ===')
	console.log(user) // the whole raw user object!
	console.log('---------')
	done(null, { _id: user._id })
})

passport.deserializeUser((id, done) => {
	(Guardian.findOne(
		{ _id: id } === null)) ?
	Teacher.findOne(
		{ _id: id },
		'fName lName school email',
		(err, user) => {
			console.log('======= DESERIALIZE USER CALLED ======')
			console.log(user)
			console.log('--------------')
			done(null, user)
		}
	) :
	Guardian.findOne(
		{ _id: id },
		'fName lName phone email',
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

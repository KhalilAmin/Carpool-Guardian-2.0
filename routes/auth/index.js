const express = require('express');
const router = express.Router();
const Guardian = require('../../models/guardian');
const Teacher = require('../../models/teacher');
const passport = require('../../passport');


// this route is just used to get the user basic info
router.get('/user', (req, res, next) => {
	console.log('===== user!!======')
	console.log(req.user)
	if (req.user) {
		return res.json({ user: req.user })
	} else {
		return res.json({ user: null })
	}
})

router.post(
	'/login',
	function(req, res, next) {
		console.log("AUTH REQ BODY", req.body)
		// console.log('=====testing===========')
		next()
	},
	passport.authenticate('local'),
	(req, res) => {
		// console.log('POST to /login')
		const user = JSON.parse(JSON.stringify(req.user)) // hack
		const cleanUser = Object.assign({}, user)
		if (cleanUser) {
			console.log(`Deleting ${cleanUser.password}`)
			delete cleanUser.password
		}
		res.json({ user: cleanUser })
		// res.redirect('/Temp');
		
	}
)

router.post(
	'/teacherlogin',
	function(req, res, next) {
		console.log(req.body)
		// console.log('=====testing===========')
		next()
	},
	passport.authenticate('local.teacher'),
	(req, res) => {
		// console.log('POST to /login')
		const user = JSON.parse(JSON.stringify(req.user)) // hack
		const cleanUser = Object.assign({}, user)
		if (cleanUser) {
			console.log(`Deleting ${cleanUser.password}`)
			delete cleanUser.password
		}
		res.json({ user: cleanUser })
		// res.redirect('/Temp');
		
	}
)

router.post('/logout', (req, res) => {
	if (req.user) {
		req.session.destroy()
		res.clearCookie('connect.sid') // clean up!
		return res.json({ msg: 'logging you out' })
	} else {
		return res.json({ msg: 'no user to log out!' })
	}
})

router.post('/signup', (req, res) => {
	const { fName, lName, email, phone, password } = req.body
	console.log(req.body);
	// ADD VALIDATION
	Guardian.findOne({ 'email': email }, (err, userMatch) => {
		if (userMatch) {
			res.json({
				error: `Sorry, already a user with the email: ${email}`
			})
		}
		const newGuardian = new Guardian({
			'fName': fName,
			'lName': lName,
			'email': email,
			'phone': phone,
			'password': password
		})
		newGuardian.save((err, savedUser) => {
			console.log(savedUser);
			if (err) throw err;
			res.json(savedUser)
		})
	})
})

router.post('/teachersignup', (req, res) => {
	const { fName, lName, email, school, phone, password } = req.body
	console.log(req.body);
	// ADD VALIDATION
	Teacher.findOne({ 'email': email }, (err, teacherMatch) => {
		if (teacherMatch) {
			return res.json({
				error: `Sorry, already a teacher with the email: ${email}`
			})
		}
		const newTeacher = new Teacher({
			'fName': fName,
			'lName': lName,
			'email': email,
			'school': school,
			'phone': phone,
			'password': password
		})
		newTeacher.save((err, savedTeacher) => {
			console.log(savedTeacher);
			if (err) throw err;
			res.json(savedTeacher)
		})
	})
})

module.exports = router

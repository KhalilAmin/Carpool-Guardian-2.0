// const mongoose = require('mongoose')
// const Schema = mongoose.Schema
// const bcrypt = require('bcryptjs')
// mongoose.promise = Promise

// // Define userSchema
// const teacherSchema = new Schema({
// 	firstName: { type: String, unique: false },
// 	lastName: { type: String, unique: false },
// 	email: {type: String,
//         unique: true,
//         match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
//     },
//     school: {type: String, unique: false, required: false },
// 	password: { type: String, unique: false, required: false },
// 	photos: []
	
// })

// // Define schema methods
// teacherSchema.methods = {
// 	checkPassword: function(inputPassword) {
// 		return bcrypt.compareSync(inputPassword, this.password)
// 	},
// 	hashPassword: plainTextPassword => {
// 		return bcrypt.hashSync(plainTextPassword, 10)
// 	}
// }

// // Define hooks for pre-saving
// teacherSchema.pre('save', function(next) {
// 	if (!this.password) {
// 		console.log('=======NO PASSWORD PROVIDED=======')
// 		next()
// 	} else {
// 		this.password = this.hashPassword(this.password)
// 		next()
// 	}

// })

// // Create reference to User & export
// const Teacher = mongoose.model('Teacher', teacherSchema)
// module.exports = Teacher

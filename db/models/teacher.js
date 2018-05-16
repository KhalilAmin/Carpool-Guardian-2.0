const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')
mongoose.promise = Promise

// Define userSchema
const teacherSchema = new Schema({
	firstName: { type: String, unique: false },
	lastName: { type: String, unique: false },
	local: {
		// email: { type: String, unique: false, required: false },
		password: { type: String, unique: false, required: false }
    },
    email: {type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    class: {type: String, unique: false, required: false },

	photos: []
	
})

// Define schema methods
teacherSchema.methods = {
	checkPassword: function(inputPassword) {
		return bcrypt.compareSync(inputPassword, this.local.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

// Define hooks for pre-saving
teacherSchema.pre('save', function(next) {
	if (!this.local.password) {
		console.log('=======NO PASSWORD PROVIDED=======')
		next()
	} else {
		this.local.password = this.hashPassword(this.local.password)
		next()
	}
	// this.password = this.hashPassword(this.password)
	// next()
})

// Create reference to User & export
const Teacher = mongoose.model('Teacher', teacherSchema)
module.exports = Teacher
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')
mongoose.promise = Promise



const teacherSchema = new Schema({
    fName: { type: String, required: true, trim: true },
    lName: { type: String, required: true, trim: true },
    password: {
        type: String,
        required: true,
        minlength: 2,
        maxLength: 15
    },
    img_base64: { data: Buffer, type: String, required: false },
    date: { type: Date, default: Date.now },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: [true, 'Email address is required'],
        index: {
            unique: true
        },
        validate: {
            validator: function (v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: 'Please fill a valid email address'
        },
    },
    phone: {
        type: String,
        trim: true,
        validate: {
            validator: function (v) {
                return /\d{3}-\d{3}-\d{4}/.test(v);
            },
            message: '{VALUE} is not a valid phone number!'
        },
        required: [true, 'User phone number required']
    }
});

// const Teacher = mongoose.model("Teacher", teacherSchema);
// module.exports = Teacher;




// Define userSchema
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

// Define schema methods
teacherSchema.methods = {
	checkPassword: function(inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

// Define hooks for pre-saving
teacherSchema.pre('save', function(next) {
	if (!this.password) {
		console.log('=======NO PASSWORD PROVIDED=======')
		next()
	} else {
		this.password = this.hashPassword(this.password)
		next()
	}

})

// Create reference to User & export
const Teacher = mongoose.model('Teacher', teacherSchema)
module.exports = Teacher

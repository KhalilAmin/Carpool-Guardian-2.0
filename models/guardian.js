const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')
mongoose.promise = Promise

const GuardSchema = new Schema({
    fName: { type: String, required: true, trim: true },
    lName: { type: String, required: true, trim: true },
    password: {
      type: String,
      required: true,
      minlength: 2,
      maxLength: 15
    },
    img_base64: { data: Buffer, type: String, required: false },
    face_token: { type: String },
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
    },
    family: {
      type: String,
      trim: true,
      required: [true, 'Family is required'],
    }
  });

  // Define schema methods
GuardSchema.methods = {
	checkPassword: function(inputPassword) {
    console.log("IM CHECKING THE PASSWORD")
		return bcrypt.compareSync(inputPassword, this.password)
	},
	hashPassword: plainTextPassword => {
    console.log("IM CHECKING THE HASH")
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

// Define hooks for pre-saving
GuardSchema.pre('save', function(next) {
	if (!this.password) {
		console.log('=======NO PASSWORD PROVIDED=======')
		next()
	} else {
		this.password = this.hashPassword(this.password)
		next()
	}
	// this.password = this.hashPassword(this.password)
	// next()
})

  const Guardian = mongoose.model("Guardian", GuardSchema);

  module.exports = Guardian;









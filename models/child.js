const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChildSchema = new Schema({
  fName: { type: String, required: true, trim: true },
  lName: { type: String, required: true, trim: true },
  img_base64: { data: Buffer, type: String, required: true },
  grade: { data: String, required: false },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: false,
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
    required: false
  },
  face_token: { data: String},
  date: { type: Date, default: Date.now },
});

const Child = mongoose.model("Child", ChildSchema);

module.exports = Child;
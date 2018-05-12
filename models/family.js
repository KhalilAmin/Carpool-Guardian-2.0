const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const familySchema = new Schema({
  familyName: {
    type: String,
    required: true,
    index: {
      unique: true
    },
    minlength: 2,
    maxLength: 15
  },
  guardian: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Note model
      ref: "Guardian"
    }
  ],
  temp: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Note model
      ref: "Temp"
    }
  ],
  child: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the child model
      ref: "Child"
    }
  ]
});

const guardSchema = new Schema({
  fName: { type: String, required: true, trim: true },
  lName: { type: String, required: true, trim: true },
  password: {
    type: String,
    required: true,
    minlength: 2,
    maxLength: 15
  },
  img_base64: { data: Buffer, contentType: String, required: true },
  face_token: { type: String, unique: true },
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

const tempSchema = new Schema({
  fName: { type: String, required: true, trim: true },
  lName: { type: String, required: true, trim: true },
  password: {
    type: String,
    required: true,
    minlength: 2,
    maxLength: 15
  },
  img_base64: { data: Buffer, contentType: String, required: true },
  face_token: { type: String, unique: true },
  date: { type: Date, default: Date.now },
  active: {
    type: boolean,
     default: false
    },
  daysOpen: { type: Number, default: 1 },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: [true, 'Email address is required'],
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

const childSchema = new Schema({
  fName: { type: String, required: true, trim: true },
  lName: { type: String, required: true, trim: true },
  img: { data: Buffer, contentType: String, required: true },
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
  face_token: { data: String, unique: true },
  date: { type: Date, default: Date.now },
});

const Family = mongoose.model("Family", familySchema);
const Guardian = mongoose.model("Guardian", guardSchema);
const Temp = mongoose.model("Temp", tempSchema);
const Child = mongoose.model("Child", childSchema);

module.exports = Family;
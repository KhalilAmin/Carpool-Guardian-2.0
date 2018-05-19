const mongoose = require("mongoose");
// const teacher = require("./teacher")
const Schema = mongoose.Schema;

const schoolSchema = new Schema({
    schoolName: {
        type: String,
        required: true,
        minlength: 2
    },
    schoolStreet: {
        type: String,
        required: true
    },
    schoolState: {
        type: String,
        required: true,
        minlength: 2
    },
    schoolCity: {
        type: String,
        required: false,
        minlength: 2
    },
    schoolZip: {
        type: Number,
        required: true,
        minlength: 2
    },
    schoolGrades: {
        type: String,
        required: true,
        minlength: 2
    },
    schoolPhone: {
        type: String,
        required: true,
        minlength: 7
    },
    schoolImg: {
        type:String,
        required: false,
    },
    lastConeIndex: {
        type: Number,
        required: false
    },
    faceSetToken: {
        type: String,
        required: true,
        minlength: 2,
    },
    teacher: [
        {
            // Store ObjectIds in the array
            type: Schema.Types.ObjectId,
            // The ObjectIds will refer to the ids in the child model
            ref: "Teacher"
        }
    ],
    // outer_id: { type: String, required: true, trim: true },
    // display_name: { type: String, required: true, trim: true },
    coneCount: {
        type: Number,
        required: true,
    },
    cone: [
        {
            // Store ObjectIds in the array
            type: Schema.Types.ObjectId,
            // The ObjectIds will refer to the ids in the child model
            ref: "Cone"
        }
    ]
});

<<<<<<< HEAD
const coneSchema = new Schema({
    coneName: {
        type: String,
        required: true,
        minlength: 2,
        index: { unique: true }
    },
    //list of drivers in queue. Position zero at cone currently
    queueData: []
});

// const teacherSchema = new Schema({
//     fName: { type: String, required: true, trim: true },
//     lName: { type: String, required: true, trim: true },
//     password: {
//         type: String,
//         required: true,
//         minlength: 2,
//         maxLength: 15
//     },
//     // img_base64: { data: Buffer, contentType: String, required: true },
//     face_token: { type: String },
//     date: { type: Date, default: Date.now },
//     email: {
//         type: String,
//         trim: true,
//         lowercase: true,
//         unique: true,
//         required: [true, 'Email address is required'],
//         index: {
//             unique: true
//         },
//         validate: {
//             validator: function (v) {
//                 return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
//             },
//             message: 'Please fill a valid email address'
//         },
//     },
//     phone: {
//         type: String,
//         trim: true,
//         validate: {
//             validator: function (v) {
//                 return /\d{3}-\d{3}-\d{4}/.test(v);
//             },
//             message: '{VALUE} is not a valid phone number!'
//         },
//         required: [true, 'User phone number required']
//     }
// });

const School = mongoose.model("School", schoolSchema);
// const Teacher = mongoose.model("Teacher", teacherSchema);
const Cone = mongoose.model("Cone", coneSchema);
=======
const School = mongoose.model("School", schoolSchema);
>>>>>>> 069b5075bf323c21970f0f20300ae5aef9f82f5d

module.exports = School;
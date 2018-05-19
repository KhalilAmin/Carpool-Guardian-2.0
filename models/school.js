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

const School = mongoose.model("School", schoolSchema);

module.exports = School;
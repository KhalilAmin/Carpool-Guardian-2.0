const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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

const Cone = mongoose.model("Cone", coneSchema);

module.exports = Cone;
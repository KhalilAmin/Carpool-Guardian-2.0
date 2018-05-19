const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FamilySchema = new Schema({
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

const Family = mongoose.model("Family", FamilySchema);

module.exports = Family;
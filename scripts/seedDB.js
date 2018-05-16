const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/carpoolGuardian",
  {
    useMongoClient: true
  }
);

const schoolSeed = [
  {
    name: "Park Road Montessori School",
    street: "3701 Haven Drive",
    state: "NC",
    city: "Charlotte",
    county: "Mecklenburg",
    zip: "28209",
    grades: "PreK-5",
    faceSetToken: "92aa90b824e07a351bcbbc70dfbbc647",
    cones: "3",
    teacher: [ 
      {
        fname: "Amber",
        lname: "Elder",
        password: "12345",
        email: "aelder@cmsschools.com",
        phone: "980-555-1234"
      },
      {
        fname: "Karen",
        lname: "Fletcher",
        password: "12345",
        email: "kfletcher@cmsschools.com",
        phone: "980-555-4321"
      }
    ]
  },
  {
    name: "Dilworth Elementary School",
    street: "405 East Park Avenue",
    state: "NC",
    city: "Charlotte",
    county: "Mecklenburg",
    zip: "28203",
    grades: "K-5",
    faceSetToken: "2b0696c4c0a7d3f57c37ca8b10ca1abb",
    cones: "3",
    teacher: [ 
      {fname: "Tina",
       lname: "Smith",
       password: "12345",
       email: "tsmith@cmsschools.com",
       phone: "980-555-1111"}

    ]
  }
 
];

db.School
  .remove({})
  .then(() => db.School.collection.insertMany(schoolSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

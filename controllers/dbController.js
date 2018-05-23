const db = require("../models");
const passport = require('../passport');

module.exports = {
  // getGuardian: function(req, res) {
  //   db.Family.guardian
  //     .find(req.query)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  getGuardian: function(req, res) {
    console.log("IN GUARD", req.body);
    db.models.Guardian
      .find(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  getSchool: function(req, res) {
    db.models.School
      .find(req.body)
      .populate("cone")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  getChildren: function(req, res) {
    db.models.Family.guardian.child
      .findbyId(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  addTeacher: function(req, res) {
    const newTeacher = new db.models.Teacher(req.body.teacher)

    newTeacher.save((err, dbTeacher) => {

      //FOR SOME REASON THIS GIVES AN ERROR BUT IT WORKS
      db.models.School.findOneAndUpdate({schoolName: req.body.schoolName}, {$push: {teacher: dbTeacher._id}}, {new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));

			if (err) throw err;
      res.json(dbTeacher)
    })
  },

  getTeacher: function(req, res) {
    console.log("IN TEACHER", req.body);
    db.models.Teacher.find(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  getFamily: function(req, res) {
    db.models.Family
      .find(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addChild: function(req, res) {
    db.models.Family.guardian.child
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addFamily: function(req, res) {
    db.models.Family
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
      console.log(res);
  },
  addQueue: function(req, res) {
    db.models.Family
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addGuardian: function(req, res) {

    let that = this
    console.log("HERE's THE GUARDIAN REQ", req.body.guardian);

    const newGuardian = new db.models.Guardian(req.body.guardian)
    newGuardian.save()
    // newGuardian.save((err, dbGuardian) => {
    //   console.log("I STILL HAVE THE FAMILY NAME", db.models.Family)
      


    //   //FOR SOME REASON THIS GIVES AN ERROR BUT IT WORKS
    //   // db.models.Family.findOneAndUpdate({familyName: req.body.familyName}, {$push: {guardian: dbGuardian._id}}, {new: true })
    //   // .then(dbModel => res.json(dbModel))
    //   // .catch(err => res.status(422).json(err));

		// 	// if (err) throw err;
    //   // res.json(dbGuardian)
    // })
    .then(result => {
      console.log("REQQQQ", req.body.familyName)
      db.models.Family
        .find({familyName: req.body.familyName})
        //.then(dbModel => res.json(dbModel))
        .then(dbModel => console.log("Hello log"))
        .catch(err => console.log(err))
    })

  },

  // addGuardian: function(req, res) {
  //   db.models.Guardian.create(req.body.guardian)
  //     .then(function(dbGuardian) {
  //       return db.models.Guardian.findOneAndUpdate({familyName: req.body.familyName}, {$push: {guardian: dbGuardian._id}}, {new:true});
  //     })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  addTemp: function(req, res) {
    db.models.Family.temp
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addSchool: function(req, res) {
    db.models.School
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateSchool: function(req, res) {
    db.models.School 
      .findOneAndUpdate({ _id: req.body._id }, {lastConeIndex: req.body.lastConeIndex})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateFamily: function(req, res) {
    db.models.Family
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateGuardian: function(req, res) {
    db.models.Family.guardian
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateChild: function(req, res) {
    db.models.Family.guardian.child
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeQueue: function(req, res) {
    db.models.School.cone.queueData
      .findbyId({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getNext: function(req, res) {
    db.models.School.cone.queueData
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addCone: function(req, res) {
    db.models.Cone.create(req.body.cone)
      .then(function(dbCone) {
        return db.models.School.findOneAndUpdate({schoolName: req.body.schoolName}, {$push: {cone: dbCone._id}}, {new: true });
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addToConeQueue: function(req, res) {
    console.log("BODY", req.body._id, req.body.face_token, req.body.confidence);
    db.models.Cone
      .findOneAndUpdate({_id: req.body._id}, {$push: {queueData: {face_token: req.body.face_token, confidence: req.body.confidence}}}, {new: true})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};

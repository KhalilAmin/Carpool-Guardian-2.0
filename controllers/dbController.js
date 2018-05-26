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
    })
  },

  getTeacher: function(req, res) {
    db.models.Teacher.find(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  getFamily: function(req, res) {

    db.models.Family
      .find(req.body)
      .populate("guardian")
      .populate("child")
      .then(dbModel => {
        res.json(dbModel)
      })
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
  },
  addQueue: function(req, res) {
    db.models.Family
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addGuardian: function(req, res) {
    const newGuardian = new db.models.Guardian(req.body.guardian)

    newGuardian.save((err, dbGuardian) => {
        db.models.Family
          .find({familyName: req.body.familyName})
          .then(dbModel => {
            if (dbModel.length < 1) {
              //Family doesn't exist - need to create it
              db.models.Family.create({familyName: req.body.familyName})
              .then(dbModel => {
                db.models.Family.findOneAndUpdate({familyName: req.body.familyName}, {$push: {guardian: dbGuardian._id}}, {new: true })
                .then(dbModel => res.json(dbModel))
                .catch(err => res.status(422).json(err));
              })
              .catch(err => res.status(422).json(err));
            } else {
              //The family does exist push to it
              db.models.Family.findOneAndUpdate({familyName: req.body.familyName}, {$push: {guardian: dbGuardian._id}}, {new: true })
              .then(dbModel => res.json(dbModel))
              .catch(err => res.status(422).json(err));
            }
          
          })
          .catch(err => res.status(422).json(err))

    })
  },
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
  // addCone: function(req, res) {
  //   console.log("CONE", db.models.Cone)
  //   console.log("SCHOOL", db.models.School)
  //   console.log("req", req.body.cone)
  //   console.log("reqschool", req.body.schoolName)

  //   db.models.Cone.create(req.body.cone)
  //     .then(function(dbCone) {
  //         db.models.School.findOneAndUpdate({schoolName: req.body.schoolName}, {$push: {cone: dbCone._id}}, {new: true })
  //         .then(dbModel => res.json(dbModel))
  //         .catch(err => res.status(422).json(err))
  //     })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  addCone: function(req, res) {
    db.models.Cone.create(req.body.cone)
      .then(function(dbCone) {
        return db.models.School.findOneAndUpdate({schoolName: req.body.schoolName}, {$push: {cone: dbCone._id}}, {new: true });
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  addToConeQueue: function(req, res) {
    db.models.Cone
      .findOneAndUpdate({_id: req.body._id}, {$push: {queueData: {face_token: req.body.face_token, confidence: req.body.confidence, guardian_id: req.body.guardian_id, family: req.body.family}}}, {new: true})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  removeFromQueue: function(req, res) {
    db.models.Cone
      .findOneAndUpdate({_id: req.body.coneId}, {$pull: {queueData: {guardian_id: req.body.guardianId}}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

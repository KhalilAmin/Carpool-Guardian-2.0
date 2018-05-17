const db = require("../models");

// Defining methods for the booksController
module.exports = {
  getGuardian: function(req, res) {
    db.Family.guardian
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getSchool: function(req, res) {
    db.School
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  getChildren: function(req, res) {
    db.Family.guardian.child
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addTeacher: function(req, res) {
    db.Teacher.create(req.body.teacher)
      .then(function(dbTeacher) {
        return db.School.findOneAndUpdate({schoolName: req.body.schoolName}, {$push: {teacher: dbTeacher._id}}, {new: true });
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getTeacher: function(req, res) {
    db.School.teacher
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getFamily: function(req, res) {
    db.Family
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addChild: function(req, res) {
    db.Family.guardian.child
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addFamily: function(req, res) {
    db.Family
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
      console.log(res);
  },
  addQueue: function(req, res) {
    db.Family
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addGuardian: function(req, res) {
    db.Family.guardian
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addTemp: function(req, res) {
    db.Family.temp
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addSchool: function(req, res) {
    db.School
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateFamily: function(req, res) {
    db.Family
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateGuardian: function(req, res) {
    db.Family.guardian
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateChild: function(req, res) {
    db.Family.guardian.child
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeQueue: function(req, res) {
    db.School.cone.queueData
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getNext: function(req, res) {
    db.School.cone.queueData
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};

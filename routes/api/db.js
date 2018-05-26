// import axios from "axios";
const router = require("express").Router();
const dbController = require("../../controllers/dbController");

router.route("/getGuardian")
  .post(dbController.getGuardian); //PAT CHANGE TO POST

// router.route("/getGuardian/:id")
//   .get(dbController.getGuardian);

router.route("/getChildren/:id")
  .get(dbController.getChildren);

router.route("/addTeacher")
  .post(dbController.addTeacher);

router.route("/getTeacher")
  .post(dbController.getTeacher);

router.route("/getTeacher/:id")
  .get(dbController.getTeacher);

router.route("/addChild")
  .post(dbController.addChild);

router.route("/addGuardian")
  .post(dbController.addGuardian);

router.route("/addFamily")
  .post(dbController.addFamily);

router.route("/addSchool")
  .post(dbController.addSchool);

router.route("/getSchool")
  .get(dbController.getSchool);

router.route("/addTemp")
  .post(dbController.addTemp);

router.route("/updateGuardian")
  .post(dbController.updateGuardian);

router.route("/updateChild")
  .post(dbController.updateChild);

router.route("/updateFamily")
  .post(dbController.updateFamily);

router.route("/addQueue")
  .post(dbController.addQueue);

router.route("/removeQueue")
  .post(dbController.removeQueue);

router.route("/getNext")
  .get(dbController.getNext);

router.route("/getFamily")
  .post(dbController.getFamily);

router.route("/getSchool")
  .post(dbController.getSchool);

router.route("/updateSchool")
  .post(dbController.updateSchool);

router.route("/addCone")
  .post(dbController.addCone);

router.route("/addToConeQueue")
  .post(dbController.addToConeQueue);

router.route("/teachersignup")
  .post(dbController.addTeacher);

router.route("/removeFromQueue")
  .post(dbController.removeFromQueue);

router.route("/updateSchoolGuardian")
  .post(dbController.removeFromQueue);

module.exports = router;
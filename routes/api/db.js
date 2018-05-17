// import axios from "axios";
const router = require("express").Router();
const dbController = require("../../controllers/dbController");

router.route("/getGuardian")

router.route("/getGuardian/:id")
  .get(dbController.getGuardian);

router.route("/getChildren/:id")
  .get(dbController.getChildren);

router.route("/addTeacher")
  .post(dbController.addTeacher);

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
  .get(dbController.getFamily);

router.route("/getSchool")
  .get(dbController.getSchool);


module.exports = router;
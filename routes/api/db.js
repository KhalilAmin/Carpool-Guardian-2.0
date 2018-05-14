// import axios from "axios";
const router = require("express").Router();
const dbController = require("../../controllers/dbController");


router.route("/getGaurdian")
  .post(dbController.getGaurdian);

router.route("/getChildren")
  .post(dbController.getChildren);

router.route("/getTeachers")
  .post(dbController.getTeachers);

router.route("/addChild")
  .post(dbController.addChild);

router.route("/addGaurdian")
  .post(dbController.addGaurdian);

router.route("/addTemp")
  .post(dbController.addTemp);

router.route("/updateGaurdian")
  .post(dbController.updateGaurdian);

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


module.exports = router;
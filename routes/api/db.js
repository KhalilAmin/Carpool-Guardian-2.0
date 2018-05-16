// import axios from "axios";
const router = require("express").Router();
const dbController = require("../../controllers/dbController");

<<<<<<< HEAD
<<<<<<< HEAD

router.route("/getGaurdian/:id")
=======
router.route("/getGaurdian")
>>>>>>> 40c3fac12ca57143022a50933b72367ae81fc02c
=======
router.route("/getGaurdian/:id")
>>>>>>> f33b33f9f5bc8c67adbab4cac8c9d5822216ea61
  .get(dbController.getGaurdian);

router.route("/getChildren/:id")
  .get(dbController.getChildren);

router.route("/getTeacher/:id")
  .get(dbController.getTeacher);

router.route("/addChild")
  .post(dbController.addChild);

router.route("/addGaurdian")
  .post(dbController.addGaurdian);

router.route("/addFamily")
  .post(dbController.addFamily);

router.route("/addSchool")
  .post(dbController.addSchool);

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

router.route("/getFamily")
  .get(dbController.getFamily);

router.route("/getSchool")
  .get(dbController.getSchool);


module.exports = router;
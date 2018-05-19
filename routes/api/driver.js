const router = require("express").Router();
const driverController = require("../../controllers/driverController");

router.route("/addDriver")
  .post(driverController.addDriver);

module.exports = router;
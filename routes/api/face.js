const router = require("express").Router();
const faceController = require("../../controllers/faceController");



router.route("/createFaceSet")
  .post(faceController.createFaceSet);

module.exports = router;

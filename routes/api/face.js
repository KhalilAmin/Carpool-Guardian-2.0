const router = require("express").Router();
const faceController = require("../../controllers/faceController");



router.route("/createFaceSet")
  .post(faceController.createFaceSet);

router.route("/getFaceSet")
  .post(faceController.getFaceSet);


module.exports = router;

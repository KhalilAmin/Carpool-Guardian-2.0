const router = require("express").Router();
const faceController = require("../../controllers/faceController");



router.route("/createFaceSet")
  .post(faceController.createFaceSet);

router.route("/getFaceSet")
  .post(faceController.getFaceSet);

router.route("/deleteFaceSet")
  .post(faceController.deleteFaceSet);

router.route("/detectFace")
  .post(faceController.detectFace);

router.route("/addFace")
  .post(faceController.addFace);

router.route("/searchFace")
  .post(faceController.searchFace);

router.route("/getFaceSetDetail")
  .post(faceController.getFaceSetDetail);

router.route("/removeFaceToken")  
  .post(faceController.removeFaceToken);

module.exports = router;

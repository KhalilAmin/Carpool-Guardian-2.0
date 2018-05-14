<<<<<<< HEAD
const router = require("express").Router();
const dcbController = require("../../controllers/dbController");

=======
// import axios from "axios";
const router = require("express").Router();
const dbController = require("../../controllers/dbController");
>>>>>>> d9d54ee3376c6cb80090d11552e28535a617b087


router.route("/getGaurdian")
  .post(dbController.getGaurdian);

<<<<<<< HEAD
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

module.exports = router;



// import axios from "axios";

// export default {
//   // get guadian tied to a face tocken (pulled from getNext)
//   // and on load of parent portal
//   getGaurdian: function (face_token) {
//     return axios.delete("/api/books/" + id);
//   },
//   // Gets all chillren tied to a family (parent Portal) and 
//   // get all children tied to a specific Guardian on pickup for a specific cone 
//   getChildren: function () {
//     return axios.get("/api/books");
//   },
//   // Gets all teachers tied to a school
//   getTeachers: function (id) {
//     return axios.get("/api/books/" + id);
//   },
//   // add a child to a family
//   addChild: function (bookData) {
//     return axios.post("/api/books", bookData);
//   },
//   //add a guardian to a family
//   addGaurdian: function (bookData) {
//     return axios.post("/api/books", bookData);
//   },
//   //add temp gaudian to a family
//   addTemp: function (bookData) {
//     return axios.post("/api/books", bookData);
//   },
//   // update guardian info
//   updateGaurdian: function (bookData) {
//     return axios.post("/api/books", bookData);
//   },
//   // update child info
//   updateChild: function (bookData) {
//     return axios.post("/api/books", bookData);
//   },
//   //Update family data
//   updateFamily: function (bookData) {
//     return axios.post("/api/books", bookData);
//   },
//   //updates cone Schema to add people to queue 
//   addQueue: function (face_Token, cone_id) {
//     return axios.post("/api/books", bookData);
//   },
//   //Removes people to queue on pickup
//   removeQueue: function (bookData) {
//     return axios.post("/api/books", bookData);
//   },
//   //gets the next person in the queue for a specific cone
//   //uses face_Token
//   getNext: function (faceToken) {
//     return axios.post("/api/books", bookData);
//   },
// };
=======
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
>>>>>>> d9d54ee3376c6cb80090d11552e28535a617b087

import axios from "axios";

export default {
  // get guadian tied to a face tocken (pulled from getNext)
  // and on load of parent portal
  getGaurdian: function (face_token) {
    return axios.delete("/api/books/" + id);
  },
  // Gets all chillren tied to a family (parent Portal) and 
  // get all children tied to a specific Guardian on pickup for a specific cone 
  getChildren: function () {
    return axios.get("/api/books");
  },
  // Gets all teachers tied to a school
  getTeachers: function (id) {
    return axios.get("/api/books/" + id);
  },
  // add a child to a family
  addChild: function (bookData) {
    return axios.post("/api/books", bookData);
  },
  //add a guardian to a family
  addGaurdian: function (bookData) {
    return axios.post("/api/books", bookData);
  },
  //add temp gaudian to a family
  addTemp: function (bookData) {
    return axios.post("/api/books", bookData);
  },
  // update guardian info
  updateGaurdian: function (bookData) {
    return axios.post("/api/books", bookData);
  },
  // update child info
  updateChild: function (bookData) {
    return axios.post("/api/books", bookData);
  },
  //Update family data
  updateFamily: function (bookData) {
    return axios.post("/api/books", bookData);
  },
  //updates cone Schema to add people to queue 
  addQueue: function (face_Token, cone_id) {
    return axios.post("/api/books", bookData);
  },
  //Removes people to queue on pickup
  removeQueue: function (bookData) {
    return axios.post("/api/books", bookData);
  },
  //gets the next person in the queue for a specific cone
  //uses face_Token
  getNext: function (faceToken) {
    return axios.post("/api/books", bookData);
  },
};
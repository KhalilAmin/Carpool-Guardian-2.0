import axios from "axios";

export default {
  //this part populates the URL and sends the data as the request
  createFaceSet: function(data) {
    return axios.post("/api/face/createFaceSet/", data);
  },
  getFaceSet: function() {
    return axios.post("/api/face/getFaceSet")
  },

  deleteFaceSet: function(data) {
    return axios.post("/api/face/deleteFaceSet", data)
  },

  detectFace: function(data) {
    return axios.post("/api/face/detectFace", data)
  },

  addFace: function(data) {
    return axios.post("/api/face/addFace", data)
  },

  searchFace: function(data) {
    return axios.post("/api/face/searchFace", data)
  },
  // get guadian tied to a face tocken (pulled from getNext)
  // and on load of parent portal

  addSchool: function(data) {
    return axios.post("api/db/addSchool", data)
  },

  getGaurdian: function (data) {
    return axios.get("/api/db/getGaurdian", data);
  },
  // Gets all chillren tied to a family (parent Portal) and 
  // get all children tied to a specific Guardian on pickup for a specific cone 
  getChildren: function (data) {
    return axios.get("/api/db/getChildren", data);
  },
  // Gets all teachers tied to a school
  getTeachers: function (id) {
    return axios.get("/api/db/getTeachers", id);
  },
  // add a child to a family
  addChild: function (childData) {
    return axios.post("/api/db/addChild", childData);
  },
  addFamily: function (familyData) {
    return axios.post("/api/db/addFamily", familyData);
  },
  //add a guardian to a family
  addGaurdian: function (gaurdianData) {
    return axios.post("/api/db/addGaurdian", gaurdianData);
  },
  //add temp gaudian to a family
  addTemp: function (tempData) {
    return axios.post("/api/db/addTemp", tempData);
  },
  // update guardian info
  updateGaurdian: function (gaurdianData) {
    return axios.post("/api/db/updateGaurdian", gaurdianData);
  },
  // update child info
  updateChild: function (childData) {
    return axios.post("/api/db/updateChild", childData);
  },
  //Update family data
  updateFamily: function (familyData) {
    return axios.post("/api/db/updateFamily", familyData);
  },
  //help
  //updates cone Schema to add people to queue 
  // addQueue: function (face_Token, cone_id) {
  //   return axios.post("/api/books", bookData);
  // },
  //Removes people to queue on pickup
  removeQueue: function (id) {
    return axios.delete("/api/db/removeQueue", id);
  },
  //gets the next person in the queue for a specific cone
  //uses face_Token
  getNext: function (data) {
    return axios.get("/api/db/getNext", data);
  },  
  
};
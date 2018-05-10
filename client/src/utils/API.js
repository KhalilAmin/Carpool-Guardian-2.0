import axios from "axios";

export default {
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
    return axios.post("api/face/addFace", data)
  },

  searchFace: function(data) {
    return axios.post("api/face/searchFace", data)
  },
};
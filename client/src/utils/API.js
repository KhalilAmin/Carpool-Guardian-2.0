import axios from "axios";

export default {
  // Gets all books
  createFaceSet: function(data) {
    console.log("API HAS THIS DATA", data)
    return axios.post("/api/face/createFaceSet/", data);
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};


// const axios = require("axios");
// const FormData = require('form-data');
// const qs = require('qs');



// const api_key = "Y7JHwFafWVDhHq_cLOCO-4jOOeu1m2iN";
// const api_secret = "7cwfnSX5J18-iIvegIVcU10jwdR-vNbq";

// function createFaceSet (display_name, outer_id) {
//     axios({
//       method: "post",
//       url: 'https://api-us.faceplusplus.com/facepp/v3/faceset/create', 
//       data: qs.stringify({
//           api_key: api_key,
//           api_secret: api_secret,
//           display_name: display_name,
//           outer_id: outer_id
//       })
//     })
//     .then(function (response) {
//         console.log("FACESET TOKEN", response.data.faceset_token);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });    
// }

// function getFaceSet () {
//     axios({
//       method: "post",
//       url: 'https://api-us.faceplusplus.com/facepp/v3/faceset/getfacesets', 
//       data: qs.stringify({
//           api_key: api_key,
//           api_secret: api_secret
//       })
//     })
//     .then(function (response) {
//         console.log(response.data.facesets);
//     })
//     .catch(function (error) {
//         //console.log(error);
//     });    
// }




// addFaceSet("Park Road Montessori", "Park Road Montessori");
//addFaceSet("blah", "blah");
// getFaceSet();

// function faceTest4 () {
//     const data = new FormData();

//     data.append('api_key', 'Y7JHwFafWVDhHq_cLOCO-4jOOeu1m2iN');
//     data.append('api_secret', '7cwfnSX5J18-iIvegIVcU10jwdR-vNbq');
//     data.append('display_name', 'AxiosTest');
//     data.append('outer_id', 'testid');
    
//     axios.post(''https://api-us.faceplusplus.com/facepp/v3/faceset/create', data);
    
// }


const axios = require("axios");
const FormData = require('form-data');
const qs = require('qs');
const api_key = "Y7JHwFafWVDhHq_cLOCO-4jOOeu1m2iN";
const api_secret = "7cwfnSX5J18-iIvegIVcU10jwdR-vNbq";

module.exports = {
    createFaceSet: function(req, res) {
       
        axios({
        method: "post",
        url: 'https://api-us.faceplusplus.com/facepp/v3/faceset/create', 
            data: qs.stringify({
                api_key: api_key,
                api_secret: api_secret,
                display_name: req.body.display_name,
                outer_id: req.body.outer_id
            })
        })
        .then(function (response) {
            res.send(response.data.faceset_token);
        })
        .catch(function (error) {
            console.log(error);
        });    
    },

    getFaceSet: function (req, res) {
       
        axios({
        method: "post",
        url: 'https://api-us.faceplusplus.com/facepp/v3/faceset/getfacesets', 
            data: qs.stringify({
                api_key: api_key,
                api_secret: api_secret
            })
        })
        .then(function (response) {
            res.send(response.data.facesets);
        })
        .catch(function (error) {
            console.log(error);
        });    
    },

    deleteFaceSet: function (req, res) {
        
        axios({
        method: "post",
        url: 'https://api-us.faceplusplus.com/facepp/v3/faceset/delete', 
            data: qs.stringify({
                api_key: api_key,
                api_secret: api_secret,
                faceset_token: req.body.faceset_token,
                check_empty: 0
            })
        })
        .then(function (response) {
            res.send(response.data.faceset_token);
        })
        .catch(function (error) {
            console.log(error);
        });    
    },

    detectFace: function (req, res) {

        axios({
        method: "post",
        url: 'https://api-us.faceplusplus.com/facepp/v3/detect', 
            data: qs.stringify({
                api_key: api_key,
                api_secret: api_secret,
                image_base64: req.body.image_base64
            })
        })
        .then(function (response) {
            res.send(response.data.faces[0].face_token);
        })
        .catch(function (error) {
            console.log(error);
        });    
    },

    addFace: function (req, res) {
        axios({
        method: "post",
        url: 'https://api-us.faceplusplus.com/facepp/v3/faceset/addface', 
            data: qs.stringify({
                api_key: api_key,
                api_secret: api_secret,
                faceset_token: req.body.faceset_token,
                face_tokens: req.body.face_token
            })
        })
        .then(function (response) {
            res.send(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });    
    },

    searchFace: function (req, res) {
        console.log("WE WILL SEARCH THE FACE")
        axios({
        method: "post",
        url: 'https://api-us.faceplusplus.com/facepp/v3/search', 
            data: qs.stringify({
                api_key: api_key,
                api_secret: api_secret,
                image_base64: req.body.image_base64,
                faceset_token: req.body.faceset_token,
                return_result_count: 1
            })
        })
        .then(function (response) {
            console.log(response);
            res.send(response.data.results[0])
        })
        .catch(function (error) {
            console.log(error);
        });    
    },

    getFaceSetDetail: function (req, res) {
        console.log("getFaceDetailed API called", req);
        axios({
        method: "post",
        url: 'https://api-us.faceplusplus.com/facepp/v3/faceset/getdetail', 
            data: qs.stringify({
                api_key: api_key,
                api_secret: api_secret,
                faceset_token: req.body.faceset_token,
            })
        })
        .then(function (response) {
            console.log("getFaceDetailed then");
            res.send(response.data.face_tokens)
        })
        .catch(function (error) {
            console.log(error);
        });    
    },
}
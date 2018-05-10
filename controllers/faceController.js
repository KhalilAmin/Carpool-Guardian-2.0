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
            console.log(response.data.facesets);
            res.send(response.data.facesets);
        })
        .catch(function (error) {
            console.log(error);
        });    
    }
}
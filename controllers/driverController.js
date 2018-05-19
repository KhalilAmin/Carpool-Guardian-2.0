const dbController = require("./dbController");
const faceController = require("./faceController");

module.exports = {

    addDriver: function(req, res) {
        console.log("Got here controller", req.body.schoolName);
        dbController.getSchool({
            schoolName: req.body.schoolName
        })
        .then(res => {

            let lastOccupiedConeIndex = -1;
            let targetConeIndex = 0
            let cones = res.data[0].cone;
            let lastConeIndex = res.data[0].lastConeIndex;
            let schoolID = res.data[0]._id;
            let faceSetToken = res.data[0].faceSetToken
            let result_face_token
            let result_confidence

            faceController.searchFace({
                image_base64: this.state.image_base64,
                faceset_token: faceSetToken
            })
            .then(res => {

                console.log(res.data.face_token);
                console.log(res.data.confidence)

                result_face_token = res.data.face_token;
                result_confidence = res.data.confidence;
            })
            .then(res => {
                
                if (result_face_token) {
                    //What is the last occupied cone

                    // let cone1 = []
                    // let cone2 = ['a']
                    // let cone3 = []
                    // let cone4 = ['a']
                    // let cones = [cone1, cone2, cone3, cone4]
                    // let lastOccupiedConeIndex = -1
                    // let targetConeIndex = 0
                    // let lastConeIndex = 0


                    if (!lastConeIndex) {
                        lastConeIndex = 0
                    }


                    console.log("The last cone index", lastConeIndex);
                    //What is the last occupied cone
                    for (let i = cones.length - 1; i > -1; i--) {
                        console.log("CONES", cones);
                        console.log("QUEUE DATA", i, cones[i].queueData.length)
                        if (cones[i].queueData.length > 0) {
                            console.log("I HAVE A CONE THAT IS GREATER THAN 0", i)
                            lastOccupiedConeIndex = i;
                            break
                        }
                    }
                    //Target either the next unoccupied cone, or the next cone in queue
                    if (lastOccupiedConeIndex + 1 === cones.length) {
                        console.log("There is a queue")
                        targetConeIndex = (lastConeIndex + 1) % cones.length
                    } else {

                        targetConeIndex = lastOccupiedConeIndex + 1
                    }
                    console.log("Target Cone Index", targetConeIndex);
                    // //API to add the driver token to the cone's queue
                    console.log(this.state.result_confidence)
                    dbController.addToConeQueue({
                        _id: cones[targetConeIndex]._id,
                        face_token: result_face_token,
                        confidence: result_confidence
                    })
                    console.log("This is the id I need", cones[targetConeIndex]._id, "and the token", result_face_token);
                    //API to update the shools last cone - note we had converted target cone to cardinal numbering - subtract 1 to get index
                    dbController.updateSchool({
                        _id: schoolID,
                        lastConeIndex: targetConeIndex
                    })
                }
            })
        })
    }
};
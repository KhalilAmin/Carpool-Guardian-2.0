import React, { Component } from "react";
import API from "../../../utils/API";
import { Col, Row, Container } from "../../../components/Grid";
import { Input, FormBtn} from "../../../components/Form";
import AddImageCard from "../AddImageCard"
import io from "socket.io-client";


class DemoCard extends Component {
  state = {
    filename: null,
  };

  socket = io('localhost:' + process.env.PORT);
  
  
  componentDidMount() {

  }

  socketSend(data) {
    this.socket.emit('CONE_UPDATE', data)
  }


//   sendMessage = event => {
//       event.preventDefault();
//       console.log("here")
//       this.socket.emit('SEND_MESSAGE', {
//           something: "message!!!!!!!!!!"
//       })
//   }

  // send = () => {
  // 	const socket = socketIOClient(this.state)

  // 	socket.emit('change color', 'red')
  // }

//   componentDidMount() {
//       axios.get('/auth/user').then(response => {
//           console.log(response.data)
//           if (response.data.user) {
//               console.log('THERE IS A USER')
//               this.setState({
//                   loggedIn: true,
//                   user: response.data.user
//               })

//               //console.log(this.state);
//           }
//           else {
//               this.setState({
//                   loggedIn: false,
//                   //isTeacher: false,
//                   user: null
//               })
//           }
//       })
//       // .then(res => {
//       // 	// console.log(res);
//       // 	// if (this.state.loggedIn)
//       // 		<Redirect to={'/Temp'} />
//       // })

//       this.getMessage();
//   }

//   getMessage() {
//       this.socket.on("RECEIVE_MESSAGE", function(data) {
//           console.log("IT")
//       })




  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  handleFileSelection = event => {
    event.preventDefault();
    
    const file = event.target.files[0];
    const reader = new FileReader();

    this.setState({ filename: event.target.files[0].name})
    
    reader.readAsDataURL(file);

    reader.onloadend = error => {
      const image_base64 = reader.result.slice(22);

      this.setState({ image_base64: image_base64})
    }

  };

  handleAddDriver2 = event => {
      API.addDriver({
          schoolName: this.state.schoolName,
          image_base64: this.state.image_base64
      })
      .then(res => {
          console.log("THIS IS THE RES", res)
      })
  }

  handleAddDriver = event => {
    console.log("Got here");
    console.log(this.state.schoolName);
    //First we need to get this school from the database
    API.getSchool({
        schoolName: this.state.schoolName
    })
    .then(schoolresult => {
        console.log("THIS IS THE SCHOOL RESULT", schoolresult.data);


        let lastOccupiedConeIndex = -1;
        let targetConeIndex = 0
        let cones = schoolresult.data[0].cone;
        let lastConeIndex = schoolresult.data[0].lastConeIndex;
        let schoolID = schoolresult.data[0]._id;
        let faceSetToken = schoolresult.data[0].faceSetToken

        console.log("DEMO: School returned -", schoolresult.data[0].schoolName)
        //Next we compare this face image with other faces in this schools' faceset
        API.searchFace({
            image_base64: this.state.image_base64,
            faceset_token: faceSetToken
        })
        //The API will return the matched face_token - we need to figure out which guardian cooresponds to that in the DB
        .then(faceresult => {
            console.log("DEMO: SearchFace returned -", faceresult.data.face_token)
            API.getGuardian({
                face_token: faceresult.data.face_token
            })
            .then(guardianresult => {
                console.log("DEMO: getGuardian returned -", guardianresult.data)
           

                console.log("TOKEN RESULT", faceresult.data.face_token);
                console.log("CONFIDENCE RESULT", faceresult.data.confidence)
                console.log("GUARDIAN RESULT", guardianresult.data[0]._id)
                console.log("FAMILY RESULT", guardianresult.data[0].family)

                //Once we know the guardian we can set the token, the confidence, and that guardian's details into the queue
                this.setState({ 
                    result_face_token: faceresult.data.face_token,
                    result_confidence: faceresult.data.confidence,
                    result_guardian_id: guardianresult.data[0]._id,
                    result_family: guardianresult.data[0].family
                });

                if (this.state.result_face_token) {
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
                    API.addToConeQueue({
                        _id: cones[targetConeIndex]._id,
                        face_token: this.state.result_face_token,
                        confidence: this.state.result_confidence,
                        guardian_id: this.state.result_guardian_id,
                        family: this.state.result_family
                    
                    
                    
                    })
                    .then(cone => {
                        console.log("This is the id I need", cones[targetConeIndex]._id, "and the token", this.state.result_face_token);
                        //API to update the shools last cone - note we had converted target cone to cardinal numbering - subtract 1 to get index
                        API.updateSchool({
                            _id: schoolID,
                            lastConeIndex: targetConeIndex
                        })
                        .then(done => {
                            console.log("THIS IS THE CONE", cone)
                            this.socketSend({schoolID: schoolID, coneID: cone.data._id})
                        })
                    })
                    
                }
                //SHOULDN"T I HAVE AN ELSE HERE FOR IF A FACE TOKEN WASN"T FOUND???
            })
        })
        //I think this is where I'd need to search the DB for the result face token and provide the Family we find
        /////////////////////////////////////
       
    })
  };

  


//   handleAdddriver = event => {
//     event.preventDefault();
    
//     API.createFaceSet({
//         outer_id: this.state.schoolName,
//         display_name: this.state.schoolName
//     })
//     .then(res => {
//         API.addSchool({
//             schoolName: this.state.schoolName,
//             schoolStreet: this.state.schoolStreet,
//             schoolCity: this.state.schoolCity,
//             schoolState: this.state.schoolState,
//             schoolZip: this.state.schoolZip,
//             schoolPhone: this.state.schoolPhone,
//             schoolGrades: this.state.schoolGrades,
//             schoolImg: this.state.image_base64,
//             coneCount: this.state.coneCount,
//             faceSetToken: res.data
//         })
//         .then(res => {
//             for (let i = 0; i < this.state.coneCount; i++) {
//                 API.addCone({
//                     schoolName: this.state.schoolName,
//                     cone: {
//                       coneName: this.state.schoolName + "Cone" + (i + 1) 
//                     }
//                 })
//             }
//         })
//     })
//   };

  render() {
     return (
        <Container fluid>
        <div className="panel panel-default">
            <div className="panel-body">
                <Row>
                    <Col size="md-4">
                        <AddImageCard
                            image_base64 = {this.state.image_base64}
                            name = {this.state.schoolName}
                        />
            
                        <div className="form-group">
                            <input
                            type="file"
                            style={{display: 'none'}}
                            onChange={this.handleFileSelection}
                            ref={fileInput => this.fileInput = fileInput}
                            />
                        </div>
                        <FormBtn
                            onClick ={() => this.fileInput.click()}
                        >
                            Select an Image
                        </FormBtn>
                    </Col>
                    <Col size="md-6">
                        <div className="form-group">              
                            <Input className="form-control"
                                value={this.state.schoolName}
                                onChange={this.handleInputChange}
                                name="schoolName"
                                placeholder="Enter School Name"
                            />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-6">
                        <FormBtn 
                            onClick ={this.handleAddDriver}
                        >
                            Save
                        </FormBtn>
                    </Col>
                </Row>
                <Row>
                    <Col size = "md-12">
                        <h1>{this.state.result_face_token}, {this.state.result_confidence }</h1>
                    </Col>
                </Row>
            </div>
        </div>
      </Container>
     );
    }
}

export default DemoCard;
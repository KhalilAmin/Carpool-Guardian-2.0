import React, { Component } from "react";
import API from "../../../utils/API";
import { Col, Row, Container } from "../../../components/Grid";
import { Input, FormBtn} from "../../../components/Form";
import AddImageCard from "../AddImageCard"


class DemoCard extends Component {
  state = {
    filename: null,
  };

  componentDidMount() {

  }

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
    API.getSchool({
        schoolName: this.state.schoolName
    })
    .then(res => {
        let lastOccupiedConeIndex = -1;
        let targetConeIndex = 0
        let cones = res.data[0].cone;
        let lastConeIndex = res.data[0].lastConeIndex;
        let schoolID = res.data[0]._id;
        let faceSetToken = res.data[0].faceSetToken

        API.searchFace({
            image_base64: this.state.image_base64,
            faceset_token: faceSetToken
        })
        .then(res => {

            console.log(res.data.face_token);
            console.log(res.data.confidence)

            this.setState({ 
                result_face_token: res.data.face_token,
                result_confidence: res.data.confidence
                });
        })
        .then(res => {
            
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
                    confidence: this.state.result_confidence
                })
                console.log("This is the id I need", cones[targetConeIndex]._id, "and the token", this.state.result_face_token);
                //API to update the shools last cone - note we had converted target cone to cardinal numbering - subtract 1 to get index
                API.updateSchool({
                    _id: schoolID,
                    lastConeIndex: targetConeIndex
                })
            }
        })
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
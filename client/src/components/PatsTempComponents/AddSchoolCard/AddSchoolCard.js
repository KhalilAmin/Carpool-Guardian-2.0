import React, { Component } from "react";
import API from "../../../utils/API";
import { Col, Row, Container } from "../../../components/Grid";
import { Input, FormBtn} from "../../../components/Form";
import AddImageCard from "../AddImageCard"


class AddSchoolCard extends Component {
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

  handleAddSchool = event => {
    event.preventDefault();
    
    API.createFaceSet({
        outer_id: this.state.schoolName,
        display_name: this.state.schoolName
    })
    .then(res => {
        API.addSchool({
            schoolName: this.state.schoolName,
            schoolStreet: this.state.schoolStreet,
            schoolCity: this.state.schoolCity,
            schoolState: this.state.schoolState,
            schoolZip: this.state.schoolZip,
            schoolPhone: this.state.schoolPhone,
            schoolGrades: this.state.schoolGrades,
            schoolImg: this.state.image_base64,
            coneCount: this.state.coneCount,
            faceSetToken: res.data
        })
        .then(res => {
            for (let i = 0; i < this.state.coneCount; i++) {
                API.addCone({
                    schoolName: this.state.schoolName,
                    cone: {
                      coneName: this.state.schoolName + "Cone" + (i + 1),
                      schoolName: this.state.schoolName
                    }
                })
            }
        })
        .then (res => {
            this.props.loadSchools();
        })
    })
  };

//   handleAddTeacher = event => {
//     API.addTeacher({
//       schoolName: this.state.teacherSchoolName, 
//       teacher: {
//           fName: this.state.teacherFirstName,
//           lName: this.state.teacherLastName,
//           email: this.state.teacherEmail,
//           password: this.state.teacherPassword,
//           phone: "704-555-1933"
//       }
//     })
// }

//   handleAddFace = event => {
//     event.preventDefault();

//     API.addFace({
//       faceset_token: this.state.add_faceset_token,
//       face_token: this.state.add_face_token
//     })
//       .then(res => {

//         this.setState({ face_added: res.data.face_added })
//       })
//   }

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
                            Select Image
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
                            <Input className="form-control"
                                value={this.state.schoolStreet}
                                onChange={this.handleInputChange}
                                name="schoolStreet"
                                placeholder="Enter School Street"
                            />
                            <Input className="form-control"
                                value={this.state.schoolCity}
                                onChange={this.handleInputChange}
                                name="schoolCity"
                                placeholder="Enter School City"
                            />
                            <Input className="form-control"
                                value={this.state.schoolState}
                                onChange={this.handleInputChange}
                                name="schoolState"
                                placeholder="Enter School State"
                            />
                            <Input className="form-control"
                                value={this.state.schoolZip}
                                onChange={this.handleInputChange}
                                name="schoolZip"
                                placeholder="Enter School Zip"
                            />
                            <Input className="form-control"
                                value={this.state.schoolPhone}
                                onChange={this.handleInputChange}
                                name="schoolPhone"
                                placeholder="Enter School Phone"
                            />
                            <Input className="form-control"
                                value={this.state.schoolGrades}
                                onChange={this.handleInputChange}
                                name="schoolGrades"
                                placeholder="Enter School Grades"
                            />
                            <Input className="form-control"
                                value={this.state.coneCount}
                                onChange={this.handleInputChange}
                                name="coneCount"
                                placeholder="Enter School Cones"
                            />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-6">
                        <FormBtn 
                            onClick ={this.handleAddSchool}
                        >
                            Save
                        </FormBtn>
                    </Col>
                </Row>
            </div>
        </div>
      </Container>
     );
    }
}

export default AddSchoolCard;
import React, { Component } from "react";
import API from "../../../utils/API";
import { Col, Row, Container } from "../../../components/Grid";
import { Input, FormBtn } from "../../../components/Form";


class TeacherSignUp extends Component {

    state = {
    };


  componentDidMount() {
    // this.loadSchools();
  }

//   loadSchools = () => {
//       API.getSchool()
//         .then(res =>
//             this.setState( {schools: res.data})
//         )
//         .catch(err => console.log(err));
//   }
  

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

//   toggleModal = () => {
//     this.setState({
//       isOpen: !this.state.isOpen
//     });
//   }

//   handleCreateFaceSet = event => {
//     event.preventDefault();

//     API.createFaceSet({
//       outer_id: this.state.create_outer_id,
//       display_name: this.state.create_display_name
//     })
//       .then(res => {
//         console.log(res.data);
//         this.setState({ faceset_token: res.data});
//     });
//   };

//   handleAddSchool = event => {
//     event.preventDefault();
    
//     API.createFaceSet({
//         outer_id: this.state.schoolName,
//         display_name: this.state.schoolName
//     })
//     .then(res => {
//         API.addSchool({
//             school_id: this.state.schoolName,
//             schoolName: this.state.schoolName,
//             schoolStreet: this.state.schoolStreet,
//             schoolCity: this.state.schoolCity,
//             schoolCounty: this.state.schoolCounty,
//             schoolState: this.state.schoolState,
//             schoolZip: this.state.schoolZip,
//             schoolPhone: this.state.schoolPhone,
//             schoolGrades: this.state.schoolGrades,
//             schoolImg: this.state.schoolImg,
//             teacherFirstName: this.state.teacherFirstName,
//             teacherLastName: this.state.teacherLastName,
//             teacherEmail: this.state.teacherEmail,
//             teacherPassword: this.state.teacherPassword,
//             teacherSchoolName: this.state.teacherSchoolName,
//             faceSetToken: res.data
//         })
//     })
//   };

  

  handleAddTeacher = event => {
      API.addTeacher({
        schoolName: this.state.teacherSchoolName, 
        teacher: {
            fName: this.state.teacherFirstName,
            lName: this.state.teacherLastName,
            email: this.state.teacherEmail,
            password: this.state.teacherPassword,
            phone: "704-555-1933"
        }
      })
  }

  render() {
        return (
            <Container>
                <Row>
                    <Col size="md-6">
                        <div className="panel panel-default" style={{height:"250px"}}>
                        <div className="panel-heading">
                            <h3 className="panel-title">Add Teacher</h3>
                        </div>
                        <div className="panel-body">
                            <div>
                                <div>
                                <div className="form-group">              
                                    <Input className="form-control"
                                        value={this.state.teacherFirstName}
                                        onChange={this.handleInputChange}
                                        name="teacherFirstName"
                                        placeholder="Enter Teacher First Name"
                                    />
                                    <Input className="form-control"
                                        value={this.state.teacherLastName}
                                        onChange={this.handleInputChange}
                                        name="teacherLastName"
                                        placeholder="Enter Teacher Last Name"
                                    />
                                    <Input className="form-control"
                                        value={this.state.teacherEmail}
                                        onChange={this.handleInputChange}
                                        name="teacherEmail"
                                        placeholder="Enter Teacher Email"
                                    />
                                    <Input className="form-control"
                                        value={this.state.teacherPassword}
                                        onChange={this.handleInputChange}
                                        name="teacherPassword"
                                        placeholder="Enter Teacher Password"
                                    />
                                    <Input className="form-control"
                                        value={this.state.teacherSchoolName}
                                        onChange={this.handleInputChange}
                                        name="teacherSchoolName"
                                        placeholder="Enter Teacher SchoolName"
                                    />

                                </div>
                                <FormBtn
                                    onClick={this.handleAddTeacher}
                                >
                                    Add Teacher
                                </FormBtn>
                                </div>
                            </div>
                        </div>
                        </div>
                    </Col>
                </Row>
            </Container>
     );
    }
}

export default TeacherSignUp;
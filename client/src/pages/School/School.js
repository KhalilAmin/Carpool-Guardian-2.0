import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Modal from "../../components/Modal";
import CardWrapper from "../../components/PatsTempComponents/CardWrapper";
import InfoCard from "../../components/PatsTempComponents/InfoCard";
import ImageCard from "../../components/PatsTempComponents/ImageCard";
import AddSchoolCard from "../../components/PatsTempComponents/AddSchoolCard"


class School extends Component {


    state = {
        schools: [],
        isOpen: false,
        // school: {
        //     name: "",
        //     street: "",
        //     city: "",
        //     county: "",
        //     state: "",
        //     zip: "",
        //     phone: "",
        //     grades: "",
        //     img: ""
        // }
        // schoolName: "",
        // schoolStreet: "",
        // schoolCity: "",
        // schoolCounty: "",
        // schoolState: "",
        // schoolZip: "",
        // schoolPhone: "",
        // schoolGrades: "",
        // schoolImg: "",
        // schoolCones: "",
        // faceset_token: "",


        // teacherName: "",
    };


  componentDidMount() {
    this.loadSchools();
  }

  loadSchools = () => {
      API.getSchool()
        .then(res => {
            this.setState( {schools: res.data})
            console.log(this.state.schools)
        }
        )
        .catch(err => console.log(err));
  }
  

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

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

  

//   handleAddTeacher = event => {
//       API.addTeacher({
//         schoolName: this.state.teacherSchoolName, 
//         teacher: {
//             fName: this.state.teacherFirstName,
//             lName: this.state.teacherLastName,
//             email: this.state.teacherEmail,
//             password: this.state.teacherPassword,
//             phone: "704-555-1933"
//         }
//       })
//   }

  render() {
        return (
        <div>             
            <Container>
                {this.state.schools.map(school => (
                <Row>
                    <Col size="md-2"></Col>
                    <Col size="md-8">
                        <div className="panel panel-default" style={{height:"250px"}}>
                            <div className="panel-heading">
                                <h3 className="panel-title">{school.schoolName}</h3>
                            </div>
                            <div className="panel-body">
                                <CardWrapper key={school._id}>
                                    <ImageCard
                                        name={school.schoolName}
                                        img= {"data:image/png;base64," + school.schoolImg}
                    
                                    /> 

                                    <InfoCard
                                        name={school.schoolName}
                                        street= {school.schoolStreet}
                                        city= {school.schoolCity}
                                        state= {school.schoolState}
                                        grades= {school.schoolGrades}
                                        phone= {school.schoolPhone}
                                    />
                                </CardWrapper>
                            </div>
                        </div>
                    </Col>
                    <Col size="md-2"></Col>
                </Row>
                ))}
  
            </Container>
            <div className="App">
                <button onClick={this.toggleModal}>
                Open the modal
                </button>

                <Modal show={this.state.isOpen}
                onClose={this.toggleModal}>
                    <AddSchoolCard/>
                </Modal>
            </div>
        </div>
     );
    }
}

export default School;
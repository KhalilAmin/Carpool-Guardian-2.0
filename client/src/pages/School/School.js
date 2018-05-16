import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn, Upload } from "../../components/Form";
import Modal from "../../components/Modal";
import CardWrapper from "../../components/PatsTempComponents/CardWrapper";
import InfoCard from "../../components/PatsTempComponents/InfoCard";
import ImageCard from "../../components/PatsTempComponents/ImageCard"

class School extends Component {
    // constructor(props) {
    //     super(props);
    
    //     this.state = { isOpen: false };
    //   }


    state = {
        addedSchool: "",
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
        schoolName: "",
        schoolStreet: "",
        schoolCity: "",
        schoolCounty: "",
        schoolState: "",
        schoolZip: "",
        schoolPhone: "",
        schoolGrades: "",
        schoolImg: "",
        schoolCones: "",
        faceset_token: "",


        teacherName: "",
    };


  componentDidMount() {
    //If you're using this as an example for another page you could get DB stuff here
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

  handleCreateFaceSet = event => {
    event.preventDefault();

    API.createFaceSet({
      outer_id: this.state.create_outer_id,
      display_name: this.state.create_display_name
    })
      .then(res => {
        console.log(res.data);
        this.setState({ faceset_token: res.data});
    });
  };

  handleAddSchool = event => {
    event.preventDefault();
    
    API.createFaceSet({
        outer_id: this.state.schoolName,
        display_name: this.state.schoolName
    })
    .then(res => {
        API.addSchool({
            school_id: this.state.schoolName,
            schoolName: this.state.schoolName,
            schoolStreet: this.state.schoolStreet,
            schoolCity: this.state.schoolCity,
            schoolCounty: this.state.schoolCounty,
            schoolState: this.state.schoolState,
            schoolZip: this.state.schoolZip,
            schoolPhone: this.state.schoolPhone,
            schoolGrades: this.state.schoolGrades,
            schoolImg: this.state.schoolImg,
            teacherName: this.state.teacher,
            teacherSchoolName: this.state.teacherSchoolName,
            faceSetToken: res.data
        })
    })
  };

  handleAddTeacher = event => {
      API.addTeacher({
        school_id: this.state.teacherSchoolName, 
        teacher: this.teacherName
      })
  }

  render() {
        return (
        <div>
            <Container>
                <Row>
                    <Col size="md-6">
                        <div className="panel panel-default" style={{height:"250px"}}>
                        <div className="panel-heading">
                            <h3 className="panel-title">Add School</h3>
                        </div>
                        <div className="panel-body">
                            <div>
                                <div>
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
                                            value={this.state.schoolCounty}
                                            onChange={this.handleInputChange}
                                            name="schoolCounty"
                                            placeholder="Enter School County"
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
                                            value={this.state.schoolImg}
                                            onChange={this.handleInputChange}
                                            name="schoolImg"
                                            placeholder="Enter School Image"
                                        />
                                        <Input className="form-control"
                                            value={this.state.schoolCones}
                                            onChange={this.handleInputChange}
                                            name="schoolCones"
                                            placeholder="Enter School Cones"
                                        />
                                </div>
                                <FormBtn
                                    onClick={this.handleAddSchool}
                                >
                                    Add School
                                </FormBtn>
                                </div>
                            </div>
                        </div>
                        </div>
                    </Col>
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
                                        value={this.state.teacherName}
                                        onChange={this.handleInputChange}
                                        name="teacherName"
                                        placeholder="Enter Teacher Name"
                                    />
                                    <Input className="form-control"
                                        value={this.state.teacherSchoolName}
                                        onChange={this.handleInputChange}
                                        name="teacherSchoolName"
                                        placeholder="Enter School Name"
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
            <Container>
                <Row>
                    <Col size="md-2"></Col>
                    <Col size="md-8">
                        <CardWrapper>
                            <ImageCard
                                name={this.state.schoolName}
                                img= {this.state.schoolImg}
                            /> 

                            <InfoCard
                                name={this.state.schoolName}
                                street= {this.state.schoolStreet}
                                city= {this.state.schoolCity}
                                state= {this.state.schoolState}
                                phone= {this.state.schoolPhone}
                                grades= {this.state.schoolGrades}
                                img= {this.state.schoolImg}
                            />
                        </CardWrapper>
                    </Col>
                    <Col size="md-2"></Col>
                </Row>
            </Container>
            


            <div>
            <div className="App">
                <button onClick={this.toggleModal}>
                Open the modal
                </button>

                {/* <Modal show={this.state.isOpen}
                onClose={this.toggleModal}>
                    <h1>Test</h1>
                    <CardWrapper>
                        <h3>blah</h3>
                        <ImageCard>
                            <h3>image</h3>
                        </ImageCard>
                        <InfoCard>
                            <h3>info</h3>
                        </InfoCard>
                    </CardWrapper>
                </Modal> */}
            </div>
            
      </div>
        </div>
     );
    }
}

export default School;
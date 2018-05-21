import React, { Component } from "react";
import { Container, Row, Col } from "../../components/Grid";
import API from "../../utils/API";


class StudentForm extends Component {
    
        state = {
            fName: "",
            lName: "",
            img_base64: "",
            grade: "",
            email:"",
            phone: ""
        };
        
    handleInputChange = event => {

        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    handleAddChild = event => {
        event.preventDefault();

        this.setState({
            fName: "",
            lName: "",
            img_base64: "",
            grade: "",
            email:"",
            phone: ""
        });

        API.addChild({
            fName: this.state.fName,
            lName: this.state.lName,
            img_base64: this.state.img_base64,
            grade: this.state.grade,
            email: this.state.email,
            phone: this.state.phone
        })
    };

    render() {

        return (
            <Container>
                <Row>
                    <h3>Student Info:</h3>
                </Row>
                <form className="form">
                    <Row>
                        <Col size="md-10">
                            <div className="form-group row">
                                <input
                                    className="form-control"
                                    value={this.state.fName}
                                    name="fName"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="First Name"
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-10">
                            <div className="form-group row">
                                <input
                                    className="form-control"
                                    value={this.state.lName}
                                    name="lName"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="Last Name"
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-10">
                            <div className="form-group row">
                                <label className="">Upload Photo</label>
                                <input
                                    className="form-control-file"
                                    value={this.state.img_base64}
                                    name="img_base64"
                                    onChange={this.handleInputChange}
                                    type="file"
                                    placeholder="Upload Photo"
                                />
                            </div>
                        </Col>
                    </Row>
                    {/* <Row>
                        <Col size="md-10">
                            <div className="form-group row">
                                <input
                                    className="form-control"
                                    value={this.state.age}
                                    name="age"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="Age"
                                />
                            </div>
                        </Col>
                    </Row> */}
                    <Row>
                        <Col size="md-10">
                            <div className="form-group row">
                                <input
                                    className="form-control"
                                    value={this.state.grade}
                                    name="grade"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="Grade"
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-10">
                            <div className="form-group row">
                                <input
                                    className="form-control"
                                    value={this.state.email}
                                    name="email"
                                    onChange={this.handleInputChange}
                                    type="email"
                                    placeholder="Email"
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-10">
                            <div className="form-group row">
                                <input
                                    className="form-control"
                                    value={this.state.phone}
                                    name="phone"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="Phone"
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-10">
                            <button className="btn btn-primary" onClick={this.handleAddChild}>Submit</button>
                        </Col>
                    </Row>
                </form>
            </Container>
        );
    }
}
export default StudentForm;

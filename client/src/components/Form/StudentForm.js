import React, { Component } from "react";
import "./Form.css";
import { Container, Row, Col } from "../Grid";

export class StudentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            photo: "",
            age: "",
            grade: "",
            teacher: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    handleInputChange = event => {

        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        this.setState({
            firstName: "",
            lastName: "",
            photo: "",
            age: "",
            grade: "",
            teacher: ""
        });
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
                                    value={this.state.firstName}
                                    name="firstName"
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
                                    value={this.state.lastName}
                                    name="lastName"
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
                                    value={this.state.photo}
                                    name="photo"
                                    onChange={this.handleInputChange}
                                    type="file"
                                    placeholder="Upload Photo"
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
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
                    </Row>
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
                                    value={this.state.teacher}
                                    name="teacher"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="Teacher"
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-10">
                            <button className="btn btn-primary" onClick={this.handleFormSubmit}>Submit</button>
                        </Col>
                    </Row>
                </form>
            </Container>
        );
    }
}


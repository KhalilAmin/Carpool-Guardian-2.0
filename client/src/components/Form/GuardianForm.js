import React, { Component } from "react";
import "./Form.css";
import { Container, Row, Col } from "../Grid";

export class GuardianForm extends Component {

    state = {
        firstName: "",
        lastName: "",
        photo: "",
        email: "",
        phone: "",
        guardianType: "",
        vehicleMake: "",
        model: "",
        plate: ""
    };

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
            email: "",
            phone: "",
            guardianType: "",
            vehicleMake: "",
            model: "",
            plate: ""
        });
    };

    render() {

        return (
            <Container>
                <Row>
                    <h3>Guardian Info:</h3>
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
                                <label className="col-form-label">
                                    Choose the Guardian Type
                    <select
                                        className="form-control"
                                        value={this.state.value}
                                        onChange={this.handleChange} >

                                        <option value="parent">Parent</option>
                                        <option value="guardian">Regular Guardian</option>
                                        <option value="temporal">Temporal Guardian</option>

                                    </select>
                                </label>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-10">
                            <div className="form-group row">
                                <input
                                    className="form-control"
                                    value={this.state.vehicleMake}
                                    name="vehicleMake"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="Vehicle Make"
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-10">
                            <div className="form-group row">
                                <input
                                    className="form-control"
                                    value={this.state.model}
                                    name="model"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="Model"
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-10">
                            <div className="form-group row">
                                <input
                                    className="form-control"
                                    value={this.state.plate}
                                    name="plate"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="Plate"
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

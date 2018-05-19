import React, { Component } from "react";
import { Container, Row, Col } from "../../components/Grid";
import API from "../../utils/API";
// import from "../DeleteBtn/DeleteBtn";

class GuardianForm extends Component {

    state = {
        fName: "",
        lName: "",
        password: "",
        img_base64: "",
        email: "",
        phone: ""
    };


    handleInputChange = event => {
   
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    handleAddGuardian = event => {
        event.preventDefault();

        this.setState({
            fName: "",
            lName: "",
            // password: "",
            img_base64: "",
            email: "",
            phone: ""
           
        });

        API.addGaurdian({
            fName: this.state.fName,
            lName: this.state.lName,
            // password:this.state.password,
            img_base64: this.state.img_base64,
            email: this.state.email,
            phone: this.state.phone
        })
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
                    {/* <Row>
                        <Col size="md-10">
                            <div className="form-group row">
                                <input
                                    className="form-control"
                                    value={this.state.password}
                                    name="password"
                                    onChange={this.handleInputChange}
                                    type="password"
                                    placeholder="Password"
                                />
                            </div>
                        </Col>
                    </Row> */}
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
                    </Row> */}
                    {/* <Row>
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
                    </Row> */}
                    <Row>
                        <Col size="md-10">
                            <button className="btn btn-primary" onClick={this.handleAddGuardian}>Submit</button>
                        </Col>
                    </Row>
                </form>
            </Container>
        );
    }
}

export default GuardianForm;
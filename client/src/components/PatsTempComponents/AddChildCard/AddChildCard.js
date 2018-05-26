import React, { Component } from "react";
import API from "../../../utils/API";
import { Col, Row, Container } from "../../../components/Grid";
import { Input, FormBtn } from "../../../components/Form";
import AddImageCard from "../AddImageCard"
import { EHOSTUNREACH } from "constants";


class AddChildCard extends Component {
    state = {
        filename: null,
    };

    componentDidMount() {
        console.log("Add Child Card, Family Object: ", this.props.familyObject)
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

        this.setState({ filename: event.target.files[0].name })

        reader.readAsDataURL(file);

        reader.onloadend = error => {
            const image_base64 = reader.result.slice(22);

            this.setState({ image_base64: image_base64 })
        }

    };

    handleAddChild = event => {
        event.preventDefault();
        console.log("Family Obj Len: ", this.props.familyObject.guardian.length);
        let faceTokenCompare = [];
        for (let i=0; i < this.props.familyObject.guardian.length; i++) {
            console.log(this.props.familyObject.guardian[i].face_token);
            faceTokenCompare.push(this.props.familyObject.guardian[i].face_token);
            console.log("FaceTokenCompare: ", faceTokenCompare);
        };
        this.setState({
            faceTokenCompare:faceTokenCompare
        });
                //Run getFaceSetDestail function to pull back array of faceTokens assoicated with a schools faceset
                // compare that against parents of child
                //push parents face tocken to all applicable schools in Face++
                //add all parents to school face set string
                //check for errors if good
                //add child
                // API.addChild({
                //     familyName: this.props.familyName,
                //     child: {
                //         fName: this.state.fName,
                //         lName: this.state.lName,
                //         img_base64: this.state.image_base64,
                //         email: this.state.email,
                //         phone: this.state.phone,
                //         grade: this.state.grade,
                //         schoolName: this.state.schoolName,
                //     }
                // })
        };

        render() {
            return (
                <Container fluid>
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <Row>
                                <Col size="md-4">
                                    <AddImageCard
                                        image_base64={this.state.image_base64}
                                    />

                                    <div className="form-group">
                                        <input
                                            type="file"
                                            style={{ display: 'none' }}
                                            onChange={this.handleFileSelection}
                                            ref={fileInput => this.fileInput = fileInput}
                                        />
                                    </div>
                                    <FormBtn
                                        onClick={() => this.fileInput.click()}
                                    >
                                        Select Image
                        </FormBtn>
                                </Col>
                                <Col size="md-6">
                                    <div className="form-group">
                                        <Input className="form-control"
                                            value={this.state.fName}
                                            onChange={this.handleInputChange}
                                            name="fName"
                                            placeholder="Enter First Name"
                                        />
                                        <Input className="form-control"
                                            value={this.state.lName}
                                            onChange={this.handleInputChange}
                                            name="lName"
                                            placeholder="Enter Last Name"
                                        />
                                        <Input className="form-control"
                                            value={this.state.schoolName}
                                            onChange={this.handleInputChange}
                                            name="schoolName"
                                            placeholder="Enter School Name"
                                        />
                                        <Input className="form-control"
                                            value={this.state.grade}
                                            onChange={this.handleInputChange}
                                            name="grade"
                                            placeholder="Enter Current Grade"
                                        />
                                        <Input className="form-control"
                                            value={this.state.email}
                                            onChange={this.handleInputChange}
                                            name="email"
                                            type="email"
                                            placeholder="Enter email"
                                        />
                                        <Input className="form-control"
                                            value={this.state.phone}
                                            onChange={this.handleInputChange}
                                            name="phone"
                                            pattern="/\d{3}-\d{3}-\d{4}/"
                                            placeholder="Enter Phone Number"
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col size="md-6">
                                    <FormBtn
                                        onClick={this.handleAddChild}
                                    >
                                        Add Child
                                </FormBtn>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Container>
            );
        }
    }

    export default AddChildCard;
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
        //if there is an error the state can be used to change the color of the card
        this.setState({
            error: false,
        })
        console.log("Family Obj Guardian: ", this.props.familyObject.guardian);
        //sets up an array to store the face token for all guardians
        let faceTokenCompare = [];
        for (let i = 0; i < this.props.familyObject.guardian.length; i++) {
            faceTokenCompare.push(this.props.familyObject.guardian[i].face_token);
        };
        console.log("faceTokenCompare = ", faceTokenCompare );
        //check to see if the school exists and if so pull back faceSetToken
        API.getSchool({
            schoolName: this.state.schoolName
        })
            .then(schoolresult => {
                console.log("School Exists ",schoolresult.data[0].faceSetToken)
                let faceSetToken = schoolresult.data[0].faceSetToken;
                this.callFaceDetail(faceSetToken,faceTokenCompare )
            })
            .catch(err => this.setState({
                error: true,
                errorCode: err
            }))
    };

    callFaceDetail = (faceSetToken, faceTokenCompare) => {
        console.log("get FaceSetDetailCalled", faceSetToken);
        console.log("get faceTokenCompare", faceTokenCompare);
        API.getFaceSetDetail({
            faceset_token: faceSetToken
        })
            .then(faceSetResult => {
                console.log("face Detail result: ", faceSetResult.data)
                let addToFaceSet = "";
                //loop over face tokens
                console.log("faceTokenCompare.length = ", faceTokenCompare.length );
                for (let x = 0; x < faceTokenCompare.length; x++) {
                    console.log("entering for loop of face details");
                    console.log(faceSetResult.data.indexOf(faceTokenCompare[x]));
                    // check to see if tockens are in the faceSet
                    if (faceSetResult.data.indexOf(faceTokenCompare[x]) === -1) {
                        console.log("index of faceset: ", faceSetResult.data.indexOf(faceTokenCompare[x]))
                        if (addToFaceSet.length === 0) {
                            addToFaceSet = faceTokenCompare[x];
                            console.log("faceSet to add 1: ", addToFaceSet);
                        } else {
                            addToFaceSet += ','+ faceTokenCompare[x];
                            console.log("faceSet to add +: ", addToFaceSet);
                        }
                        
                        //add new list of missing faces to face setID of school
                    } 
                }
                //finally add child to db
                this.addface(faceSetToken, addToFaceSet);

            })
            .catch(err => this.setState({
                error: true,
                errorCode: err
            }))
    };

    addface = (faceSetToken, addToFaceSet) => {
        console.log("add face called");
        API.addFace({
            faceset_token: faceSetToken,
            face_token: addToFaceSet
        })
            .then(res => {
                console.log("face set added: ", res.data);
                this.setState({ face_added: res.data.face_added })
                this.addChildToDb();
            })
            .catch(err => this.setState({
                error: true,
                errorCode: err
            }))
    }

    addChildToDb = event => {
        API.addChild({
            familyName: this.props.familyName,
            child: {
                fName: this.state.fName,
                lName: this.state.lName,
                img_base64: this.state.image_base64,
                email: this.state.email,
                phone: this.state.phone,
                grade: this.state.grade,
                schoolName: this.state.schoolName,
            }
        })
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
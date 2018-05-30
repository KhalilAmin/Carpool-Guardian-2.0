import React, { Component } from "react";
import API from "../../../utils/API";
import { Col, Row, Container } from "../../../components/Grid";
import { Input, FormBtn } from "../../../components/Form";
import AddImageCard from "../AddImageCard"
import Grid from '@material-ui/core/Grid';
import Phone from '@material-ui/icons/Phone';
import Security from '@material-ui/icons/Security';
import Place from '@material-ui/icons/Place';
import LocalLibrary from '@material-ui/icons/LocalLibrary';

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

        this.setState({ filename: event.target.files[0].name })

        reader.readAsDataURL(file);

        reader.onloadend = error => {
            const image_base64 = reader.result.slice(22);

            this.setState({ image_base64: image_base64 })
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
                    .then(res => {
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
                <Grid container spacing={24} justify="space-between">

                    <Grid item xs={4}>
                        <Grid container direction="column" justify="space-between" alignItems="flex-start">
                            <Grid item style={{ marginTop: 50 }}>
                                <AddImageCard
                                    image_base64={this.state.image_base64}
                                    name={this.state.schoolName}
                                />
                                <input
                                    type="file"
                                    style={{ display: 'none' }}
                                    onChange={this.handleFileSelection}
                                    ref={fileInput => this.fileInput = fileInput}
                                />
                            </Grid>

                            <Grid item >
                                <FormBtn
                                    onClick={() => this.fileInput.click()}
                                    style={{ marginTop: 50 }}
                                >
                                    Select Image
                                </FormBtn>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={7}>
                        <Grid container spacing={8} alignItems="flex-end">
                            <Grid item>
                                <Security />
                            </Grid>
                            <Grid item sm={10}>
                                <Input
                                    fullWidth
                                    value={this.state.schoolName}
                                    onChange={this.handleInputChange}
                                    name="schoolName"
                                    label="Enter School Name"
                                    placeholder="School Name"
                                />
                            </Grid>
                        </Grid>

                        <Grid container spacing={8} alignItems="flex-end">
                            <Grid item>
                                <Place />
                            </Grid>
                            <Grid item sm={10}>
                                <Input
                                    fullWidth
                                    value={this.state.schoolStreet}
                                    onChange={this.handleInputChange}
                                    name="schoolStreet"
                                    label="Enter School Street"
                                    placeholder="School Street"
                                />
                            </Grid>
                        </Grid>

                        <Grid container spacing={8} alignItems="flex-end">
                            <Grid item>
                                <Place />
                            </Grid>
                            <Grid item sm={10}>
                                <Input
                                    fullWidth
                                    value={this.state.schoolCity}
                                    onChange={this.handleInputChange}
                                    name="schoolCity"
                                    label="Enter School City"
                                    placeholder="School City"
                                />
                            </Grid>
                        </Grid>

                        <Grid container spacing={8} alignItems="flex-end">
                            <Grid item>
                                <Place />
                            </Grid>
                            <Grid item sm={10}>
                                <Input
                                    fullWidth
                                    value={this.state.schoolState}
                                    onChange={this.handleInputChange}
                                    name="schoolState"
                                    placeholder="School State"
                                    label="Enter School State"
                                />
                            </Grid>
                        </Grid>

                        <Grid container spacing={8} alignItems="flex-end">
                            <Grid item>
                                <Place />
                            </Grid>
                            <Grid item sm={10}>
                                <Input
                                    fullWidth
                                    value={this.state.schoolZip}
                                    onChange={this.handleInputChange}
                                    name="schoolZip"
                                    placeholder="School Zip"
                                    label="Enter School Zip"
                                />
                            </Grid>
                        </Grid>

                        <Grid container spacing={8} alignItems="flex-end">
                            <Grid item>
                                <Phone />
                            </Grid>
                            <Grid item sm={10}>
                                <Input
                                    fullWidth
                                    value={this.state.schoolPhone}
                                    onChange={this.handleInputChange}
                                    name="schoolPhone"
                                    placeholder="School Phone"
                                    label="Enter School Phone"
                                />
                            </Grid>
                        </Grid>

                        <Grid container spacing={8} alignItems="flex-end">
                            <Grid item>
                                <LocalLibrary />
                            </Grid>
                            <Grid item sm={10}>
                                <Input
                                    fullWidth
                                    value={this.state.schoolGrades}
                                    onChange={this.handleInputChange}
                                    name="schoolGrades"
                                    placeholder="School Grades"
                                    label="Enter School Grades"
                                />
                            </Grid>
                        </Grid>

                        <Grid container spacing={8} alignItems="flex-end">
                            <Grid item>
                                <LocalLibrary />
                            </Grid>
                            <Grid item sm={10}>
                                <Input
                                    fullWidth
                                    value={this.state.coneCount}
                                    onChange={this.handleInputChange}
                                    name="coneCount"
                                    placeholder="Cones"
                                    label="Enter School Cones"
                                />
                            </Grid>
                        </Grid>

                        <Grid item sm={10}>
                            <FormBtn
                                onClick={this.handleAddSchool}
                                style={{ marginTop: 20, marginBottom: 30 }}
                            >
                                Save
                            </FormBtn>
                        </Grid>
                    </Grid>
                </Grid>
            </Container >
        );
    }
}

export default AddSchoolCard;
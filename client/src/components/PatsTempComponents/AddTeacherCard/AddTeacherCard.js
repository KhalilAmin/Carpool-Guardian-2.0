import React, { Component } from "react";
import API from "../../../utils/API";
import { Col, Row, Container } from "../../../components/Grid";
import { Input, FormBtn } from "../../../components/Form";
import AddImageCard from "../AddImageCard"
import Grid from '@material-ui/core/Grid';
import Person from '@material-ui/icons/Person';
import Email from '@material-ui/icons/Email';
import Phone from '@material-ui/icons/Phone';
import Lock from '@material-ui/icons/Lock';
import Security from '@material-ui/icons/Security'


class AddTeacherCard extends Component {
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

    handleAddTeacher = event => {
        API.addTeacher({
            schoolName: this.state.teacherSchoolName,
            teacher: {
                fName: this.state.teacherFirstName,
                lName: this.state.teacherLastName,
                email: this.state.teacherEmail,
                password: this.state.teacherPassword,
                phone: this.state.teacherPhone,
                school: this.state.teacherSchoolName
            }
        })
    }

    render() {
        return (
            <Container fluid>
                <Grid container spacing={24}  >

                    <Grid item md={12} direction="column" justify="flex-start" alignItems="stretch">

                        <Grid container spacing={8} alignItems="flex-end" md={12}>
                            <Grid item>
                                <Person />
                            </Grid>
                            <Grid item sm={10} >
                                <Input 
                                    fullWidth
                                    value={this.state.teacherFirstName}
                                    onChange={this.handleInputChange}
                                    name="teacherFirstName"
                                    label="Enter Teacher First Name"
                                    placeholder="First Name"
                                />
                            </Grid>
                        </Grid>

                        <Grid container spacing={8} alignItems="flex-end">
                            <Grid item>
                                <Person />
                            </Grid>
                            <Grid item sm={10}>
                                <Input
                                    fullWidth
                                    value={this.state.teacherLastName}
                                    onChange={this.handleInputChange}
                                    name="teacherLastName"
                                    label="Enter Teacher Last Name"
                                    placeholder="Last Name"
                                />
                            </Grid>
                        </Grid>

                        <Grid container spacing={8} alignItems="flex-end">
                            <Grid item>
                                <Email />
                            </Grid>
                            <Grid item sm={10}>
                                <Input
                                    fullWidth
                                    value={this.state.teacherEmail}
                                    onChange={this.handleInputChange}
                                    name="teacherEmail"
                                    type="email"
                                    label="Enter Teacher Email"
                                    placeholder="Email"
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
                                    value={this.state.teacherPhone}
                                    onChange={this.handleInputChange}
                                    name="teacherPhone"
                                    pattern="/\d{3}-\d{3}-\d{4}/"
                                    label="Enter Teacher Phone Number"
                                    placeholder="Phone Number"
                                />
                            </Grid>
                        </Grid>

                        <Grid container spacing={8} alignItems="flex-end">
                            <Grid item>
                                <Lock />
                            </Grid>
                            <Grid item sm={10}>
                                <Input
                                    fullWidth
                                    value={this.state.teacherPassword}
                                    onChange={this.handleInputChange}
                                    name="teacherPassword"
                                    type="password"
                                    label="Enter Teacher Password"
                                    placeholder="Password"
                                />
                            </Grid>
                        </Grid>

                        <Grid container spacing={8} alignItems="flex-end">
                            <Grid item>
                                <Lock />
                            </Grid>
                            <Grid item sm={10}>
                                <Input
                                    fullWidth
                                    value={this.state.confirm}
                                    onChange={this.handleInputChange}
                                    name="confirm"
                                    type="password"
                                    label="Confirm Password"
                                    placeholder="Confirm Password"
                                />
                            </Grid>
                        </Grid>

                        <Grid container spacing={8} alignItems="flex-end">
                            <Grid item>
                                <Security/>
                            </Grid>
                            <Grid item sm={10}>
                                <Input
                                    fullWidth
                                    value={this.state.teacherSchoolName}
                                    onChange={this.handleInputChange}
                                    name="teacherSchoolName"
                                    label="Enter Teacher School Name "
                                    placeholder="School Name"
                                />
                            </Grid>
                        </Grid>

                        <Grid item>
                            <FormBtn
                                onClick={this.handleAddTeacher}
                                style={{ marginTop: 20, marginBottom: 50 }}
                            >
                                Save
                            </FormBtn>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

export default AddTeacherCard;
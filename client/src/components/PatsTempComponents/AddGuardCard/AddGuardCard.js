import React, { Component } from "react";
import API from "../../../utils/API";
import { Container } from "../../../components/Grid";
import { Input, FormBtn } from "../../../components/Form";
import AddImageCard from "../AddImageCard"
import Grid from '@material-ui/core/Grid';
import Person from '@material-ui/icons/Person';
import Email from '@material-ui/icons/Email';
import Phone from '@material-ui/icons/Phone';
import People from '@material-ui/icons/People';
import Lock from '@material-ui/icons/Lock';

import "./addGuardCard.css";

class AddGuardCard extends Component {
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

    handleAddGuard = event => {
        event.preventDefault();
        //create face token
        API.detectFace({
            image_base64: this.state.image_base64
        })
            .then(res => this.setState({ face_token: res.data }))
            .then(res => {
                API.addGuardian({
                    familyName: this.state.familyName,
                    guardian: {
                        fName: this.state.fName,
                        lName: this.state.lName,
                        password: this.state.password,
                        confirm:this.state.confirm,
                        img_base64: this.state.image_base64,
                        email: this.state.email,
                        phone: this.state.phone,
                        family: this.state.familyName,
                        face_token: this.state.face_token
                    }
                })
            })
    };

    render() {
        return (
            <Container fluid>
                <Grid container spacing={24} justify="space-between">
                   
                    <Grid item xs={4}>
                        <Grid container direction="column" justify="space-between" alignItems="flex-start">
                            <Grid item style={{ marginTop: 50 }}>
                                <AddImageCard
                                    image_base64={this.state.image_base64}
                                />
                                <input
                                    type="file"
                                    style={{ display: 'none' }}
                                    onChange={this.handleFileSelection}
                                    ref={fileInput => this.fileInput = fileInput}
                                />
                            </Grid>

                            <Grid item >
                                <FormBtn onClick={() => this.fileInput.click()} style={{ marginTop: 50 }}>
                                    Select Image
                                    </FormBtn>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={7}>
                        <Grid container spacing={8} alignItems="flex-end">
                            <Grid item>
                                <Person />
                            </Grid>
                            <Grid item sm={10}>
                                <Input
                                   fullWidth
                                    value={this.state.fName}
                                    onChange={this.handleInputChange}
                                    name="fName"
                                    label="Enter First Name"
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
                                    value={this.state.lName}
                                    onChange={this.handleInputChange}
                                    name="lName"
                                    label="Enter Last Name"
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
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                    name="email"
                                    type="email"
                                    label="Enter Email"
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
                                    value={this.state.phone}
                                    onChange={this.handleInputChange}
                                    name="phone"
                                    pattern="/\d{3}-\d{3}-\d{4}/"
                                    label="Enter Phone Number"
                                    placeholder="Phone Number"
                                />
                            </Grid>
                        </Grid>

                        <Grid container spacing={8} alignItems="flex-end">
                            <Grid item>
                                <People />
                            </Grid>
                            <Grid item sm={10}>
                                <Input
                                    fullWidth
                                    value={this.state.familyName}
                                    onChange={this.handleInputChange}
                                    name="familyName"
                                    label="Enter Family"
                                    placeholder="Family"
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
                                    value={this.state.password}
                                    onChange={this.handleInputChange}
                                    name="password"
                                    type="password"
                                    label="Enter Password"
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

                        <Grid item sm={10}>
                            <FormBtn 
                            onClick={this.handleAddGuard} 
                            style={{ marginTop: 20, marginBottom: 30 }}>
                                
                                Save
                            </FormBtn>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

export default AddGuardCard;
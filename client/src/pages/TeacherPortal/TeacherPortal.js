import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Modal from "../../components/Modal";
import TchrPrtlCrdWrpr from "../../components/CardWrapper/TeacherPrtlCrdWrpr/TchrPrtlCrdWrpr";
import InfoCard from "../../components/PatsTempComponents/InfoCard";
import ImageCard from "../../components/PatsTempComponents/ImageCard";
import Dropdown from "../../components/PatsTempComponents/Dropdown";
import io from "socket.io-client";




class TeacherPortal extends Component {

    state = {
        // user: this.props.user,
        coneNames: [],
        schoolNames: [],
        schoolName: "",
        cones: ["Please select a cone"],
        guardian: {
            fName: "",
            lName: "",
            img: "",
            email: "",
            phone: "",
            family: ""
        },
        foundGuardian: false,
        coneindex: 0
    };

    socket = io('localhost:8080');

    componentDidMount() {
        
        console.log("TeacherPortal.js Componenet Called");
        console.log("THIS IS THE TEACHER", this.props.school);
        this.loadCones()
    }

    componentWillUpdate() {
        this.nextDriverTriggered(this.state.coneindex);
    }

    // loadSchoolNames = () => {
    //     API.getSchool()
    //         .then(res => {

    //             let schoolNames = ["Please select a school"]
    //             res.data.forEach(function (school) {
    //                 schoolNames.push(school.schoolName)
    //             })
    //             this.setState({ schoolNames: schoolNames })
    //         })
    //         .catch(err => console.log(err));
    // }

    // handleSelect = selectitem => {

    // }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    loadCones = event => {

        API.getSchool({
            schoolName: this.props.school
        })
            .then(res => {
                let intro = [{coneName: "Please select a cone"}]
                this.setState({cones: intro.concat(res.data[0].cone)})
            })
            .catch(err => console.log(err));
    }

    handleConeDropdown = event => {
        let coneindex = event.target.value;
        this.setState({coneindex: coneindex})
        
        this.getNextDriver(coneindex);
    }

    nextDriverTriggered = () => {
        console.log("I GOT TRIGGERED");
        if (this.state.selectedCone) {
            console.log("AND I GOT BELOW")
            console.log(this.state.selectedCone._id)
            let that = this;

            this.socket.on(this.state.selectedCone._id, function(data) {
                console.log("I HEARD SOMETHING--------------------------------", that.state.selectedCone._id);
                
                that.getNextDriver(that.state.coneindex)
            })
        }
    }

    getNextDriver = coneindex => {
        API.getSchool({
            schoolName: this.props.school
        })
            .then(res => {
                let intro = [{coneName: "Please select a cone"}]
                let cones = intro.concat(res.data[0].cone)
                let selectedCone = cones[coneindex]

                this.setState({cones: cones, selectedCone: selectedCone, schoolId: res.data[0]._id})
                
                //With the cone selected and the ID known, we start listening for updates to the cone from the server

                if (selectedCone.queueData[0]) {
                    API.getFamily({
                        familyName: selectedCone.queueData[0].family
                    })
                    .then(res => {
                        let guardian = res.data[0].guardian.filter(item => item._id === selectedCone.queueData[0].guardian_id)[0]
                        this.setState({foundGuardian: true, guardian: guardian}) 
                    })
                    .catch(err => console.log(err));
                }
                else {
                    this.setState({
                    guardian: {
                        fName: "",
                        lName: "",
                        img: "",
                        email: "",
                        phone: "",
                        family: ""
                        },
                    foundGuardian: false
                    })

                    //Start listening for a driver coming in
                    
                }
            })
            .catch(err => console.log(err));
    }

    advanceDriver = () => {
        API.removeFromQueue({
            coneId: this.state.selectedCone._id,
            guardianId: this.state.guardian._id
        })
        .then(res => {
            this.getNextDriver(this.state.coneindex)
        })
    }


    render() {
        return (
            <div>
                <div>
                    <Container>
                        <Row>
                            <Col size="md-3">
                                <button onClick={this.advanceDriver}>Advance Driver</button>
                            </Col>
                            <Col size="md-6"></Col>
                            <Col size="md-3">
                                <select
                                    onChange={this.handleConeDropdown}
                                    
                                >
                                    {this.state.cones.map((cone, index)=> (
                                        <option value={index} key={cone._id}>{cone.coneName}</option>
                                    ))}
                                </select>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col size="md-12">
                                {this.state.foundGuardian ? (
                                    <div>
                                    <TchrPrtlCrdWrpr
                                        cardHeading = "Parent"
                                        fName = {this.state.guardian.fName}
                                        lName = {this.state.guardian.lName}
                                        img = {this.state.guardian.img_base64}
                                        email = {this.state.guardian.email}
                                        phone = {this.state.guardian.phone}
                                        family = {this.state.guardian.family}
                                    />
                                    </div>



                                    ) : (
                                        <h3>Waiting for Driver</h3>
                                )}
                            </Col>
                        </Row>
                    </Container>
                </div>
                {/* <div>
                    <Col size="md-8">
                        <div className="panel panel-default" style={{ height: "250px" }}>
                            <div className="panel-heading">
                                <h3 className="panel-title">{school.schoolName}</h3>
                            </div>
                            <div className="panel-body">
                            </div>
                        </div>
                    </Col>
                </div> */}
            </div>
        )
    };
}


export default TeacherPortal;
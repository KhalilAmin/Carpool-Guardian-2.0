import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import ImageCard from "../../components/PatsTempComponents/ImageCard";
import CardWrapper from "../../components/PatsTempComponents/CardWrapper";
import InfoCardG from "../../components/PatsTempComponents/InfoCardG";
import InfoCardC from "../../components/PatsTempComponents/InfoCardC";
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
        children: {
            fName: "",
            lName: "",
            grade: "",
            phone: "",
            email: "",
            school: ""
        },
        foundGuardian: false,
        confidence: 0,
        coneindex: 0
    };

    socket = io('localhost:8080');

    componentDidMount() {
        
        console.log("DID I EVEN GET HERE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
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
        console.log("SOMEHOW THE SCHOOL NAME IS HERE", this.props.userData.school)
        API.getSchool({
            schoolName: this.props.userData.school
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
        console.log("IM GETTING THE NEXT DRIVER!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        API.getSchool({
            schoolName: this.props.userData.school
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
                        this.setState({foundGuardian: true, guardian: guardian, confidence: selectedCone.queueData[0].confidence, foundChildren: true, children: res.data[0].child})
                        this.checkConfidence(selectedCone.queueData[0].confidence); 
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
                    foundGuardian: false,
                    confidence: "",
                    children: {
                        fName: "",
                        lName: "",
                        grade: "",
                        phone: "",
                        email: "",
                        school: ""
                        },
                    foundChildren: false
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

    checkConfidence = (confidence) => {
        if (confidence >= 85) {
            this.setState({confidenceClass: "panel panel-success"})
        } else if (confidence >= 60 && this.props.confidence < 85) {
            this.setState({confidenceClass: "panel panel-warning"})
        } else {
            this.setState({confidenceClass: "panel panel-danger"})
        }
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
                        {this.state.foundGuardian ? (
                            <Row>
                                <Col size="md-8">

                                    <div className={this.state.confidenceClass} style={{ height: "250px" }}>
                                        <div className="panel-heading">
                                            <h3 className="panel-title">{this.state.guardian.fName} {this.state.guardian.lName} -- {this.state.confidence} </h3>
                                        </div>
                                        <div className="panel-body">
                                            <CardWrapper>
                                                <Col size="md-8">
                                                    <ImageCard
                                                        name='{this.state.guardian.fName} {this.state.guardian.lName}'
                                                        img={"data:image/png;base64," + this.state.guardian.img_base64}

                                                    />
                                                </Col>
                                                <Col size="md-4">
                                                    <InfoCardG
                                                        fName={this.state.guardian.fName}
                                                        lName={this.state.guardian.lName}
                                                        family = {this.state.guardian.family}
                                                        phone={this.state.guardian.phone}
                                                        email={this.state.guardian.email}
                                                        confidence = {this.state.confidence}
                                                    />
                                                </Col>
                                            </CardWrapper>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        ) : (
                            <h3>Waiting for Driver</h3>
                        )
                    }
                    </Container>
                    <Container>
                        {this.state.foundChildren ? (
                            this.state.children.map(child => (
                                <Row>
                                    {/* <Col size="md-2"></Col> */}
                                    <Col size="md-8">
                                        <div className="panel panel-default" style={{ height: "250px" }}>
                                            <div className="panel-heading">
                                                <h3 className="panel-title">{child.fName} {child.lName}</h3>
                                            </div>
                                            <div className="panel-body">
                                                <CardWrapper key={child._id}>
                                                    <Col size="md-8">
                                                        <ImageCard
                                                            name='{child.fName} {child.lName}'
                                                            img={"data:image/png;base64," + child.img_base64}

                                                        />
                                                    </Col>
                                                    <Col size="md-4">
                                                        <InfoCardC
                                                            fName={child.fName}
                                                            lName={child.lName}
                                                            grade={child.grade}
                                                            phone={child.phone}
                                                            email={child.email}
                                                            school={child.school}
                                                        />
                                                    </Col>
                                                </CardWrapper>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            )
                        )
                        ) : (
                                <div></div>
                            )
                        }

                    </Container>
                </div>
            </div>
        )
    };
}


export default TeacherPortal;
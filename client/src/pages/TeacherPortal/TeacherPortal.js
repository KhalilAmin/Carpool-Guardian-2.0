import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Modal from "../../components/Modal";
import TchrPrtlCrdWrpr from "../../components/CardWrapper/TeacherPrtlCrdWrpr/TchrPrtlCrdWrpr";
import InfoCard from "../../components/PatsTempComponents/InfoCard";
import ImageCard from "../../components/PatsTempComponents/ImageCard";
import Dropdown from "../../components/PatsTempComponents/Dropdown";



class TeacherPortal extends Component {

    state = {
        // user: this.props.user,
        coneNames: [],
        schoolNames: [],
        schoolName: "",
        cones: [],
        guardian: {}
    };


    componentDidMount() {
        

        console.log("TeacherPortal.js Componenet Called");
        console.log("THIS IS THE TEACHER", this.props.school);
        this.loadCones()
    }

    loadSchoolNames = () => {
        API.getSchool()
            .then(res => {

                let schoolNames = ["Please select a school"]
                res.data.forEach(function (school) {
                    schoolNames.push(school.schoolName)
                })
                this.setState({ schoolNames: schoolNames })
            })
            .catch(err => console.log(err));
    }

    handleSelect = selectitem => {

    }

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
                let intro = ["Please select a cone"]
                
                

                this.setState({cones: intro.concat(res.data[0].cone)})
                console.log(this.state.cones);
                // let coneNames = ["Please select a cone"]
                // let cones = []
                // res.data[0].cone.forEach(function (cone) {
                //     coneNames.push(cone.coneName)
                //     cones.push(cone)
                // })
                // this.setState({ coneNames: coneNames })
                // this.setState({cones: cones})
            })
            .catch(err => console.log(err));
    }

    handleConeDropdown = event => {
        let coneindex = event.target.value;
        let selectedCone = this.state.cones[coneindex]

        this.setState({selectedCone: selectedCone})

        if (selectedCone.queueData[0]) {
            console.log(selectedCone.queueData[0].family)

            API.getFamily({
                familyName: selectedCone.queueData[0].family
            })
            .then(res => {
                console.log("HERE IS THE FAMILY", res.data);
                let guardian = res.data[0].guardian.filter(item => item._id === '5b0702392c6cd70b2f93d4d5')[0]
                this.setState({guardian: guardian}) 
                console.log("HERE IS THE GUARDIAN", guardian);
            })
            .catch(err => console.log(err));





        }
        

        // this.setState({ 
        //     selectedCone: event.target.value 
        //     driver
        // })

        //the cone needs to have the family name then we look at the next item in the queue and bring the person based on facetoken and their family
    }


    render() {
        return (
            <div>
                <div>
                    <Container>
                        <Row>
                            <Col size="md-9"></Col>
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
                                    <TchrPrtlCrdWrpr
                                    cardHeading = "Parent"
                                    fName = {this.state.guardian.fName}
                                    lName = {this.state.guardian.lName}
                                    img = {this.state.guardian.img_base64}
                                    image_heading = "Some Heading"
                    
                                    />
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
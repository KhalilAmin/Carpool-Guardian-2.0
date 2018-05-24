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
        cones: []
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
                

                this.setState({cones: res.data[0].cone})
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
                            <h1> teacher portal called! </h1>
                            <Col size="md-11"></Col>
                            <select
                                onChange={this.handleConeDropdown}
                                
                            >
                                {/* {this.state.coneNames.map(cone => (
                                    <option value={cone}>{cone}</option>
                                ))} */}
                                {this.state.cones.map((cone, index)=> (
                                    <option value={index} key={cone._id}>{cone.coneName}</option>
                                ))}
                            </select>
                            <Col size="md-1"></Col>
                        </Row>
                    </Container>
                    <h1> {this.props.user} is at {this.value} </h1>
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
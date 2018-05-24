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
        schoolName: ""
    };


    componentDidMount() {
        console.log("TeacherPortal.js Componenet Called");
        console.log(this.props.user);
        this.loadSchoolNames()
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

    handleSchoolDropdown = event => {
        let schoolName = event.target.value;

        this.setState({ schoolName: schoolName })

        API.getSchool({
            schoolName: schoolName
        })
            .then(res => {
                let coneNames = ["Please select a cone"]
                res.data[0].cone.forEach(function (cone) {
                    coneNames.push(cone.coneName)
                })
                this.setState({ coneNames: coneNames })
            })
            .catch(err => console.log(err));
    }

    handleConeDropdown = event => {
        let coneName = event.target.value;

        this.setState({ coneName: coneName })

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
                                value={this.state.cone}
                            >
                                {this.state.coneNames.map(cone => (
                                    <option value={cone}>{cone}</option>
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
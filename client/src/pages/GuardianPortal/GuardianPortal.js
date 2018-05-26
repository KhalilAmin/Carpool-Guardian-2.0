import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Modal from "../../components/Modal";
import CardWrapper from "../../components/PatsTempComponents/CardWrapper";
import InfoCardC from "../../components/PatsTempComponents/InfoCardC";
import InfoCardG from "../../components/PatsTempComponents/InfoCardG";
import ImageCard from "../../components/PatsTempComponents/ImageCard";
// import AddTempCard from "../../components/PatsTempComponents/AddTempCard"
import AddChildCard from "../../components/PatsTempComponents/AddChildCard"
import AddGuardCard from "../../components/PatsTempComponents/AddGuardCard"


class GuardianPortal extends Component {


    state = {
        // user: this.props.user,
        familyObject: "",
        children: [],
        temp: [],
        guardians: [],
        isOpenGuard: false,
        isOpenTemp: false,
        isOpenChild: false,
    };


    componentDidMount() {
        this.loadGuardians(this.props.userData.family);
        this.loadChildren(this.props.userData.family);
    }

    loadGuardians = familyName => {
        console.log("Load Guardians Called");
        console.log("family Name: ", familyName);

        API.getFamily({
            familyName: familyName
        })
            .then(res => {
                this.setState({ 
                    guardians: res.data[0].guardian,
                    familyObject: res.data[0]
                });
                console.log("res.data: ",res.data[0].child.length);
                console.log("family object: ",this.state.familyObject);
            }
            )
            .catch(err => console.log(err));
    }

    loadChildren = familyName => {
        console.log("Load Children Called");
        API.getFamily({
            familyName: familyName
        })
            .then(res => {
                this.setState({ children: res.data[0].child });
            }
            )
            .catch(err => console.log(err));
    }



    handleInputChange = event => {
        console.log("handle input change called");
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <div>
                    <Container>
                    <div className="guardian-header">
                            <h1>This is the Guardian Section</h1>
                        </div>
                        {this.state.guardians.map(guardian => (
                            <Row>
                                {/* <Col size="md-2"></Col> */}
                                <Col size="md-8">
                                    <div className="panel panel-default" style={{ height: "250px" }}>
                                        <div className="panel-heading">
                                            <h3 className="panel-title">{guardian.fName} {guardian.lName}</h3>
                                        </div>
                                        <div className="panel-body">
                                            <CardWrapper key={guardian._id}>
                                                <Col size="md-8">
                                                    <ImageCard
                                                        name='{guardian.fName} {guardian.lName}'
                                                        img={"data:image/png;base64," + guardian.img_base64}
                                                    />
                                                </Col>
                                                <Col size="md-4">
                                                    <InfoCardG
                                                        // id={guardian._id}
                                                        fName={guardian.fName}
                                                        lName={guardian.lName}
                                                        phone={guardian.phone}
                                                        email={guardian.email}
                                                    />
                                                </Col>
                                            </CardWrapper>
                                        </div>
                                    </div>
                                </Col>
                                {/* <Col size="md-2"></Col> */}
                            </Row>
                        ))}

                    </Container>
                    {/* <div className="App">
                        <button onClick={this.toggleModal}>
                            Open the modal
                </button>

                        <Modal show={this.state.isOpen}
                            onClose={this.toggleModal}>
                            <AddGuardCard />
                        </Modal>
                    </div> */}
                </div>
                {/* Children Container */}
                <div>
                    <Container>
                    <div className="child-header">
                            <h1>This is the Child Section</h1>
                        </div>
                        {this.state.children.map(child => (
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
                                {/* <Col size="md-2"></Col> */}
                            </Row>
                        ))}

                    </Container>
                    <div className="App">
                        <button onClick={this.toggleModal}>
                            Add Child
                        </button>

                        <Modal show={this.state.isOpen}
                            onClose={this.toggleModal}>
                            <AddChildCard
                                familyName={this.props.userData.family}
                                familyObject= {this.state.familyObject}
                                />
                        </Modal>
                    </div>
                </div>
            </div>
        );
    }
}

export default GuardianPortal;
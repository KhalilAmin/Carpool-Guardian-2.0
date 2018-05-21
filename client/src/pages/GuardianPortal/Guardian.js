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


class Guardian extends Component {


    state = {
        familyid: String,
        children: [],
        temp: [],
        guardians: [],
        isOpenGuard: false,
        isOpenTemp: false,
        isOpenChild: false,
    };


    componentDidMount() {
        this.loadGuardians();
        // this.loadFamily();
        // this.loadChildren();
    }

    loadGuardians = () => {
        API.getGuardian()
            .then(res => {
                this.setState({ guardians: res.data })
                console.log(this.state.guardians)
            }
            )
            .catch(err => console.log(err));
    }



    loadChildren = () => {
        API.getChildren()
            .then(res => {
                this.setState({ children: res.data })
                console.log(this.state.children)
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
                {/* Guardian Container */}
                <div>
                    <Container>
                        {this.state.guardians.map(guardian => (
                            <Row>
                                <Col size="md-2"></Col>
                                <Col size="md-8">
                                    <div className="panel panel-default" style={{ height: "250px" }}>
                                        <div className="panel-heading">
                                            <h3 className="panel-title">{guardian.fName} {guardian.lName}</h3>
                                        </div>
                                        <div className="panel-body">
                                            <CardWrapper key={guardian._id}>
                                                <ImageCard
                                                    name='{guardian.fName} {guardian.lName}'
                                                    img={"data:image/png;base64," + guardian.img_base64}

                                                />

                                                <InfoCardG
                                                    id={guardian._id}
                                                    fName={guardian.fName}
                                                    lName={guardian.lName}
                                                    phone={guardian.phone}
                                                    email={guardian.email}
                                                />
                                            </CardWrapper>
                                        </div>
                                    </div>
                                </Col>
                                <Col size="md-2"></Col>
                            </Row>
                        ))}

                    </Container>
                    <div className="App">
                        <button onClick={this.toggleModal}>
                            Open the modal
                </button>

                        <Modal show={this.state.isOpen}
                            onClose={this.toggleModal}>
                            <AddGuardCard />
                        </Modal>
                    </div>
                </div>
                {/* Children Container */}
                <div>
                    <Container>
                        {this.state.children.map(child => (
                            <Row>
                                <Col size="md-2"></Col>
                                <Col size="md-8">
                                    <div className="panel panel-default" style={{ height: "250px" }}>
                                        <div className="panel-heading">
                                            <h3 className="panel-title">{child.fName} {child.lName}</h3>
                                        </div>
                                        <div className="panel-body">
                                            <CardWrapper key={child._id}>
                                                <ImageCard
                                                    name='{child.fName} {child.lName}'
                                                    img={"data:image/png;base64," + child.img_base64}

                                                />

                                                <InfoCardC
                                                    fName={child.fName}
                                                    lName={child.lName}
                                                    grade={child.grade}
                                                    phone={child.phone}
                                                    email={child.email}
                                                    school={child.school}
                                                />
                                            </CardWrapper>
                                        </div>
                                    </div>
                                </Col>
                                <Col size="md-2"></Col>
                            </Row>
                        ))}

                    </Container>
                    <div className="App">
                        <button onClick={this.toggleModal}>
                            Open the modal
                </button>

                        <Modal show={this.state.isOpen}
                            onClose={this.toggleModal}>
                            <AddChildCard />
                        </Modal>
                    </div>
                </div>
            </div>
        );
    }
}

export default Guardian;
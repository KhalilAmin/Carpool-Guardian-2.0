import React, { Component } from "react";
import GuardianForm from "../../components/Form/GuardianForm.js";
import StudentForm from "../../components/Form/StudentForm.js";
import Modal from "../../components/Modal";
import AddBtn from "../../components/AddBtn";
import { Container, Row, Col } from "../../components/Grid";
import API from "../../utils/API";
import CardWrapper from "../../components/CardWrapper/CardWrapper";

class Parent extends Component {

    state = {
        isOpen: false,
        form: false,
        name: "",
        guardians: [],
        students: []
    }

    componentDidMount() {
        this.loadFamily()
    }

    loadFamily = () => {
        API.getFamily(guardianID).then(res => { //This GuardianID needs to be passed
            this.setState({
                guardians: res.data.guardian,
                students: res.data.child
            }).catch(err => console.log(err));
        });
    }

    toggleModal = (status) => {
        this.setState({
            isOpen: !this.state.isOpen
        });
        if (status) {
            this.setState({
                form: true
            });
        } else {
            this.setState({
                form: false
            });
        }
    }


    render() {
        return (
            <Container>
                <h2> Guardian: </h2>
                <AddBtn
                    name="addGuardian"
                    onClick={() => this.toggleModal(true)}
                />

                <h2> Student: </h2>
                <AddBtn
                    name="addStudent"
                    onClick={() => this.toggleModal(false)}
                />

                <div>
                    <Modal show={this.state.isOpen}
                        onClose={this.toggleModal}>
                        {this.state.form ? <GuardianForm /> : <StudentForm />}
                    </Modal>

                </div>

                {this.state.guardians}.forEach(guardian => {
                    <Row>
                        {/* <CardWrapperGuardian>      
                            {guardian}
                        </CardWrapperGuardian> */}
                    </Row>
                });


                {this.state.students}.forEach(student => {
                    <Row>
                        {/* <CardWrapperStudent>       
                            {student}
                        </CardWrapperStudent> */}
                    </Row>
                });


            </Container>

        );
    }

}

export default Parent;
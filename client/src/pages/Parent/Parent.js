import React, { Component } from "react";
import GuardianForm from "../../components/Form/GuardianForm.js";
import StudentForm from "../../components/Form/StudentForm.js";
import Modal from "../../components/Modal";
import AddBtn from "../../components/AddBtn";
import { Container, Row, Col } from "../../components/Grid";

class Parent extends Component {

    state = {
        isOpen: false,
        form: false,
        name:""
    }

    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen,
            form:true
        });
        // if(this.state.name == "addGuardian"){
        //     console.log(this.state.name);
        //     this.setState.form = true;
        // } else{
        //     this.setState.form = false;
        // }
        
    }
    

    // toggleModalS = () => {
    //     this.setState({
    //         isOpen: !this.state.isOpen,
    //         form:false
    //     });
    // }

    render() {
        return (
            <Container>
                <h2> Guardian: </h2>
                <AddBtn value={this.state.addGaurdian}
                        name="addGuardian" 
                        onClick={this.toggleModal}
                        />

                <h2> Student: </h2>
                <AddBtn value={this.state.addStudent}
                        name="addStudent" 
                        onClick={this.toggleModal} 
                        />

                <div>
                    <Modal show={this.state.isOpen}
                        onClose={this.toggleModal}>
                        <GuardianForm/> 
                    </Modal>

                </div>
            </Container>
        );
    }

}

export default Parent;
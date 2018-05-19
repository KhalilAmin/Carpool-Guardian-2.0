import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Modal from "../../components/Modal";
import CardWrapper from "../../components/PatsTempComponents/CardWrapper";
import InfoCard from "../../components/PatsTempComponents/InfoCard";
import ImageCard from "../../components/PatsTempComponents/ImageCard";
import Dropdown from "../../components/PatsTempComponents/Dropdown";



class TeacherPortal extends Component {

    state = {
        coneNames: [],
        schoolNames: [],
        schoolName: ""
    };


  componentDidMount() {
    this.loadSchoolNames()
  }

  loadSchoolNames = () => {
      API.getSchool()
        .then(res => {
            
            let schoolNames = ["Please select a school"]
            res.data.forEach(function(school) {
                schoolNames.push(school.schoolName)
            })
            this.setState( {schoolNames: schoolNames})
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

        this.setState({schoolName: schoolName})

        API.getSchool({
          schoolName: schoolName
        })
        .then(res => {
            let coneNames = ["Please select a cone"]
            res.data[0].cone.forEach(function(cone) {
                coneNames.push(cone.coneName)
            })
            this.setState({coneNames: coneNames})
        })
        .catch(err => console.log(err));
  }

  handleConeDropdown = event => {
      let coneName = event.target.value;

      this.setState({coneName: coneName})

      //the cone needs to have the family name then we look at the next item in the queue and bring the person based on facetoken and their family
  }


  render() {
        return (
        <div>             
            <Container>
                <Row>
                    <Col size="md-11"></Col>
                        <select
                        onChange={this.handleSchoolDropdown}
                        value={this.state.schoolName}
                        >
                            {this.state.schoolNames.map(school => (
                            <option value={school}>{school}</option>
                            ))}
                        </select>
                    <Col size="md-1"></Col>
                </Row>
                <Row>
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
        </div>
        //             <Col size="md-8">
        //                 <div className="panel panel-default" style={{height:"250px"}}>
        //                     <div className="panel-heading">
        //                         <h3 className="panel-title">{school.schoolName}</h3>
        //                     </div>
        //                     <div className="panel-body">
        //                         <CardWrapper key={school._id}>
        //                             <ImageCard
        //                                 name={school.schoolName}
        //                                 img= {"data:image/png;base64," + school.schoolImg}
                    
        //                             /> 

        //                             <InfoCard
        //                                 name={school.schoolName}
        //                                 street= {school.schoolStreet}
        //                                 city= {school.schoolCity}
        //                                 state= {school.schoolState}
        //                                 grades= {school.schoolGrades}
        //                                 phone= {school.schoolPhone}
        //                             />
        //                         </CardWrapper>
        //                     </div>
        //                 </div>
        //             </Col>
        //             <Col size="md-2"></Col>
        //         </Row>
        //         ))}
  
        //     </Container>
        //     <div className="App">
        //         <button onClick={this.toggleModal}>
        //         Open the modal
        //         </button>

        //         <Modal show={this.state.isOpen}
        //         onClose={this.toggleModal}>
        //             <AddSchoolCard/>
        //         </Modal>
        //     </div>
        // </div>
     );
    }
}

export default TeacherPortal;
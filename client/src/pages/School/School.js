import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Modal from "../../components/Modal";
import CardWrapper from "../../components/PatsTempComponents/CardWrapper";
import InfoCard from "../../components/PatsTempComponents/InfoCard";
import ImageCard from "../../components/PatsTempComponents/ImageCard";
import AddSchoolCard from "../../components/PatsTempComponents/AddSchoolCard";
import Button from '@material-ui/core/Button';


class School extends Component {

    state = {
        schools: [],
        isOpen: false,
        refresh: false
    };


  componentDidMount() {
    this.loadSchools();
  }

  loadSchools = () => {
      API.getSchool()
        .then(res => {
            this.setState( {schools: res.data, refresh: false})
            console.log(this.state.schools)
        }
        )
        .catch(err => console.log(err));
  }
  
  handleInputChange = event => {
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
            <Container>
                {this.state.schools.map(school => (
                <Row>
                    <Col size="md-2"></Col>
                    <Col size="md-8">
                        <div className="panel panel-default" style={{height:"250px"}}>
                            <div className="panel-heading">
                                <h3 className="panel-title">{school.schoolName}</h3>
                            </div>
                            <div className="panel-body">
                                <CardWrapper key={school._id}>
                                    <ImageCard
                                        name={school.schoolName}
                                        img= {"data:image/png;base64," + school.schoolImg}
                    
                                    /> 

                                    <InfoCard
                                        name={school.schoolName}
                                        street= {school.schoolStreet}
                                        city= {school.schoolCity}
                                        state= {school.schoolState}
                                        grades= {school.schoolGrades}
                                        phone= {school.schoolPhone}
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
                <Button 
                onClick={this.toggleModal}
                variant="raised" 
                color="primary"
                style={{marginTop:30}}
                >
                Add School
                </Button>

                <Modal show={this.state.isOpen}
                onClose={this.toggleModal}>
                    <AddSchoolCard loadSchools={this.loadSchools}/>
                </Modal>
            </div>
        </div>
     );
    }
}

export default School;
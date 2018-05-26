import React, { Component } from "react";
import API from "../../../utils/API";
import { Col, Row, Container } from "../../../components/Grid";
import { Input, FormBtn} from "../../../components/Form";
import AddImageCard from "../AddImageCard"


class AddGuardCard extends Component {
  state = {
    filename: null,
  };

  componentDidMount() {

  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  handleFileSelection = event => {
    event.preventDefault();
    
    const file = event.target.files[0];
    const reader = new FileReader();

    this.setState({ filename: event.target.files[0].name})
    
    reader.readAsDataURL(file);

    reader.onloadend = error => {
      const image_base64 = reader.result.slice(22);

      this.setState({ image_base64: image_base64})
    }

  };

  handleAddGuard = event => {
    event.preventDefault();
    //create face token
    // API.detectFace({
    //     image_base64: this.state.image_base64
    // })
    // .then(res => this.setState({face_token: res.data}))
    // .then(res => {
        API.addGuardian({
            familyName: this.state.familyName,
            guardian: {
                fName: this.state.fName,
                lName: this.state.lName,
                password: this.state.password,
                //img_base64: this.state.image_base64,
                email: this.state.email,
                phone: this.state.phone,
                family: this.state.familyName,
                face_token: "023lwe023lse0sel3"
            }
        })
    // })
  };

  render() {
     return (
      <Container fluid>
        <div className="panel panel-default">
            <div className="panel-body">
                <Row>
                    <Col size="md-4">
                        <AddImageCard
                            image_base64 = {this.state.image_base64}
                        />
                        <div className="form-group">
                            <input
                            type="file"
                            style={{display: 'none'}}
                            onChange={this.handleFileSelection}
                            ref={fileInput => this.fileInput = fileInput}
                            />
                        </div>
                        <FormBtn
                            onClick ={() => this.fileInput.click()}
                        >
                            Select Image
                        </FormBtn>
                    </Col>
                    <Col size="md-6">
                        <div className="form-group">              
                            <Input className="form-control"
                                value={this.state.fName}
                                onChange={this.handleInputChange}
                                name="fName"
                                placeholder="Enter First Name"
                            />
                            <Input className="form-control"
                                value={this.state.lName}
                                onChange={this.handleInputChange}
                                name="lName"
                                placeholder="Enter Last Name"
                            />
                            <Input className="form-control"
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                name="email"
                                type="email"
                                placeholder="Enter Email"
                            />
                            <Input className="form-control"
                                value={this.state.phone}
                                onChange={this.handleInputChange}
                                name="phone"
                                pattern="/\d{3}-\d{3}-\d{4}/"
                                placeholder="Enter Phone Number"
                            />
                            <Input className="form-control"
                                value={this.state.familyName}
                                onChange={this.handleInputChange}
                                name="familyName"
                                pattern="/\d{3}-\d{3}-\d{4}/"
                                placeholder="Enter Family"
                            />
                            <Input className="form-control"
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                name="password"
                                type="password"
                                pattern="/\d{3}-\d{3}-\d{4}/"
                                placeholder="Enter Password"
                            />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-6">
                        <FormBtn 
                            onClick ={this.handleAddGuard}
                        >
                            Save
                        </FormBtn>
                    </Col>
                </Row>
            </div>
        </div>
      </Container>
     );
    }
}

export default AddGuardCard;
import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import { Input, FormBtn} from "../../components/Form";

class Login extends Component {

  state = {
    familyName: "",
    name: ""
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleAddFamily = event => {
    event.preventDefault();
    API.addFamily({
      familyName: this.state.familyName
    })
  };



  render() {

    return (
      <Container fluid>
        <h1>Hello World</h1>
        <div className="panel panel-default">
          <div className="panel-body">
            <Row>
              <Col size="md-6">
                <div className="form-group">
                  <Input className="form-control"
                    value={this.state.familyName}
                    onChange={this.handleInputChange}
                    name="fName"
                    placeholder="Enter Family Name"
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col size="md-6">
                <FormBtn
                  onClick={this.handleAddFamily}
                  >
                    Input Family
                </FormBtn>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    )
  }
};


export default Login;
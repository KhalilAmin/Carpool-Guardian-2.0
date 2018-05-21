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
      </Container>
    )
  }
};


export default Login;
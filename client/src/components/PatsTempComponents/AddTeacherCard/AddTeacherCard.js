import React, { Component } from "react";
import API from "../../../utils/API";
import { Col, Row, Container } from "../../../components/Grid";
import { Input, FormBtn} from "../../../components/Form";
import AddImageCard from "../AddImageCard"


class AddTeacherCard extends Component {
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

  handleAddTeacher = event => {
    API.addTeacher({
      schoolName: this.state.teacherSchoolName, 
      teacher: {
          fName: this.state.teacherFirstName,
          lName: this.state.teacherLastName,
          email: this.state.teacherEmail,
          password: this.state.teacherPassword,
          phone: this.state.teacherPhone,
          school: this.state.teacherSchoolName
      }
    })
}

  render() {
     return (
      <Container fluid>
        <div className="panel panel-default">
            <div className="panel-body">
                <Row>
                    <Col size="md-6">
                    <div className="form-group">              
                        <Input className="form-control"
                            value={this.state.teacherFirstName}
                            onChange={this.handleInputChange}
                            name="teacherFirstName"
                            placeholder="Enter Teacher First Name"
                        />
                        <Input className="form-control"
                            value={this.state.teacherLastName}
                            onChange={this.handleInputChange}
                            name="teacherLastName"
                            placeholder="Enter Teacher Last Name"
                        />
                        <Input className="form-control"
                            value={this.state.teacherEmail}
                            onChange={this.handleInputChange}
                            name="teacherEmail"
                            placeholder="Enter Teacher Email"
                        />
                        <Input className="form-control"
                            value={this.state.teacherPhone}
                            onChange={this.handleInputChange}
                            name="teacherPhone"
                            placeholder="Enter Teacher Phone"
                        />
                        <Input className="form-control"
                            value={this.state.teacherPassword}
                            onChange={this.handleInputChange}
                            name="teacherPassword"
                            type="password"
                            placeholder="Enter Teacher Password"
                        />
                        <Input className="form-control"
                            value={this.state.teacherSchoolName}
                            onChange={this.handleInputChange}
                            name="teacherSchoolName"
                            placeholder="Enter Teacher SchoolName"
                        />
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-6">
                        <FormBtn 
                            onClick ={this.handleAddTeacher}
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

export default AddTeacherCard;
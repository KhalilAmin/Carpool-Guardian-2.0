import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";

class Temp extends Component {
  state = {
    create_outer_id: "",
    create_display_name: "",
    faceset_token: "",
    faceset_list: [],
    deleted_faceset_token: "",
    delete_faceset_token: "",
    image_base64: null,
    filename: null,
    upload_face_token: "",
    add_faceset_token: "",
    add_face_token: "",
    face_added: 0,
    search_faceset_token: "",
    result_face_token: "",
    result_confidence: 0,
    detail_faceset_token: "",
    
  };

  componentDidMount() {
    //If you're using this as an example for another page you could get DB stuff here
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleCreateFaceSet = event => {
    event.preventDefault();

    API.createFaceSet({
      outer_id: this.state.create_outer_id,
      display_name: this.state.create_display_name
    })
      .then(res => {
        console.log(res.data);
        this.setState({ faceset_token: res.data});
    });
  };

  handleGetFaceSet = event => {
    event.preventDefault();

    API.getFaceSet({
    })
      .then(res => {
        this.setState({ faceset_list: res.data});
    });
  };

  handleDeleteFaceSet = event => {
    event.preventDefault();

    API.deleteFaceSet({
      faceset_token: this.state.delete_faceset_token
    })
      .then(res => {
        this.setState({ deleted_faceset_token: res.data});
        console.log(this.state.deleted_faceset_token);
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

  handleFileUpload = event => {
    event.preventDefault();

    API.detectFace({
      image_base64: this.state.image_base64
    })
      .then(res => {
        this.setState({ upload_face_token: res.data})
    })
  };

  handleAddFace = event => {
    event.preventDefault();

    API.addFace({
      faceset_token: this.state.add_faceset_token,
      face_token: this.state.add_face_token
    })
      .then(res => {

        this.setState({ face_added: res.data.face_added })
      })
  }

  handleSearchFace = event => {
    event.preventDefault();

    API.searchFace({
      image_base64: this.state.image_base64,
      faceset_token: this.state.search_faceset_token
    })
      .then(res => {
        console.log(res.data.face_token);
        console.log(res.data.confidence)

        this.setState({ 
          result_face_token: res.data.face_token,
          result_confidence: res.data.confidence
          });
      })
  }

  handleGetFaceSetDetail = event => {
    event.preventDefault();

    API.getFaceSetDetail({
      faceset_token: this.state.detail_faceset_token
    })
    .then(res => {
      console.log("DETAIL RETURNS THIS", res.data);
      this.setState({
        result_faceset_detail: res.data
      })
    })
  }

  handleAddFamily = event => {
    event.preventDefault();

    API.addFamily({

    })
  }

  render() {
     return (
      <Container fluid>
        <Row>
          <Col size="md-4">
            <div className="panel panel-default" style={{height:"250px"}}>
              <div className="panel-heading">
                <h3 className="panel-title">Create FaceSet</h3>
              </div>
              <div className="panel-body">
                <div>
                  {this.state.faceset_token ? (
                    <small>FaceSet Token: {this.state.faceset_token}</small>
                  ) : (
                    <div>
                      <div className="form-group">              
                        <Input className="form-control"
                        value={this.state.create_outer_id}
                        onChange={this.handleInputChange}
                        name="create_outer_id"
                        placeholder="Enter outer_id"
                        />
                        <small className="form-text text-muted">The outer_id would probably be our school pkid.</small>
                        <Input className="form-control"
                          value={this.state.create_display_name}
                          onChange={this.handleInputChange}
                          name="create_display_name"
                          placeholder="Enter display_name"
                        />
                        <small className="form-text text-muted">The display_name is probably the school name.</small>
                      </div>
                      <FormBtn
                        onClick={this.handleCreateFaceSet}
                      >
                        Add FaceSet
                      </FormBtn>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Col>
          <Col size="md-4">
            <div className="panel panel-default" style={{height:"250px"}}>
                <div className="panel-heading">
                    <h3 className="panel-title">Get FaceSet</h3>
                </div>
                <div className="panel-body">
                <div>
                  {this.state.faceset_list.length > 0 ? (
                      <List>
                        {this.state.faceset_list.map(face => (
                          <ListItem key={face.faceset_token}>
                            <small>{face.display_name}, {face.outer_id}, {face.faceset_token}</small>
                          </ListItem>
                        ))}
                      </List>
                  ) : (
                      <FormBtn
                        onClick={this.handleGetFaceSet}
                      >
                        Get FaceSet
                      </FormBtn>
                  )}
                </div>
              </div>
            </div>
          </Col>
          <Col size="md-4">
            <div className="panel panel-default" style={{height:"250px"}}>
              <div className="panel-heading">
                <h3 className="panel-title">Delete FaceSet</h3>
              </div>
              <div className="panel-body">
                <div>
                  {this.state.deleted_faceset_token ? (
                    <small>Deleted FaceSet Token: {this.state.deleted_faceset_token}</small>
                  ) : (
                    <div>
                      <div className="form-group">              
                        <Input className="form-control"
                        value={this.state.delete_faceset_token}
                        onChange={this.handleInputChange}
                        name="delete_faceset_token"
                        placeholder="Enter faceset token to be deleted"
                        />
                      </div>
                      <FormBtn
                        onClick={this.handleDeleteFaceSet}
                      >
                        Delete FaceSet
                      </FormBtn>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="md-4">
            <div className="panel panel-default" style={{height:"250px"}}>
                <div className="panel-heading">
                    <h3 className="panel-title">Detect Face</h3>
                </div>
                <div className="panel-body">
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
                    Select image
                  </FormBtn>
                  {this.state.filename ? (
                    <small>Filename: {this.state.filename}</small>
                  ) : (
                    <small>Filename: </small>
                  )}
                  <FormBtn 
                    onClick ={this.handleFileUpload}
                  >
                    Upload File
                  </FormBtn>
                  <br/>
                  {this.state.upload_face_token ? (
                    <small>Face Token: {this.state.upload_face_token}</small>
                  ) : (
                    <small>Face Token: </small>
                  )}
                </div>
            </div>
          </Col>
          <Col size="md-4">
            <div className="panel panel-default" style={{height:"250px"}}>
              <div className="panel-heading">
                <h3 className="panel-title">Add Face</h3>
              </div>
              <div className="panel-body">
                <div>
                  {this.state.face_added > 0 ? (
                    <small>Faces Added: {this.state.face_added}</small>
                  ) : (
                    <div>
                      <div className="form-group">              
                        <Input className="form-control"
                        value={this.state.add_faceset_token}
                        onChange={this.handleInputChange}
                        name="add_faceset_token"
                        placeholder="Enter faceset_token"
                        />
                        <small className="form-text text-muted">This is the token of the faceset that you created.</small>
                        <Input className="form-control"
                          value={this.state.add_face_token}
                          onChange={this.handleInputChange}
                          name="add_face_token"
                          placeholder="Enter face_token"
                        />
                        <small className="form-text text-muted">This is the token of the face.</small>
                      </div>
                      <FormBtn
                        onClick={this.handleAddFace}
                      >
                        Add Face
                      </FormBtn>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Col>
          <Col size="md-4">
            <div className="panel panel-default" style={{height:"250px"}}>
                <div className="panel-heading">
                    <h3 className="panel-title">Search Face</h3>
                </div>
                <div className="panel-body">
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
                    Select image
                  </FormBtn>
                  {this.state.filename ? (
                    <small>Filename: {this.state.filename}</small>
                  ) : (
                    <small>Filename: </small>
                  )}
                  <div className="form-group">              
                    <Input className="form-control"
                    value={this.state.search_faceset_token}
                    onChange={this.handleInputChange}
                    name="search_faceset_token"
                    placeholder="Enter faceset_token"
                    />
                    <small className="form-text text-muted">This is the token of the faceset that you created.</small>
                  </div>  
                  <FormBtn 
                    onClick ={this.handleSearchFace}
                  >
                    Start Search
                  </FormBtn>
                  <br/>
                  {this.state.result_face_token ? (
                    <small>Result Face Token: {this.state.result_face_token} Confidence: {this.state.result_confidence}</small>
                  ) : (
                    <small>Face Result Token: Confidence: </small>
                  )}
                </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="md-4">
              <div className="panel panel-default" style={{height:"250px"}}>
                <div className="panel-heading">
                  <h3 className="panel-title">FaceSet Detail</h3>
                </div>
                <div className="panel-body">
                  <div>
                    {this.state.result_faceset_detail ? (
                      <small>Face Set Detail: {this.state.result_faceset_detail}</small>
                    ) : (
                      <div>
                        <div className="form-group">              
                          <Input className="form-control"
                          value={this.state.detail_faceset_token}
                          onChange={this.handleInputChange}
                          name="detail_faceset_token"
                          placeholder="Enter faceset token to be detailed"
                          />
                        </div>
                        <FormBtn
                          onClick={this.handleGetFaceSetDetail}
                        >
                          FaceSet Detail
                        </FormBtn>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Col>
        </Row>
      </Container>
     );
    }
}

export default Temp;
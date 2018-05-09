// $(document).ready(function() {

//     function readDemoFile(e) {

//         database.ref("drivers").once("value").then(function(snapshot) {
//             ///Kind of doing this backwards - should fix
//             if (snapshot.exists) {
//                 drivernumber = snapshot.numChildren() + 1;
//             } else {
//                 drivernumber = 1;
//             }

   
        

//             database.ref("cones").once("value").then(function(snapshot) {
//                 if (snapshot.exists()) {

//                     var data = snapshot.val();   
//                     var keys = Object.keys(data);
//                     var base64url;

//                     //figure out the target cone
//                     if (keys.includes("3")) {
//                         if (drivernumber%conecount === 0) {
//                             targetConeStr = "3";        
//                         } else {
//                             targetConeStr = (drivernumber%conecount).toString();
//                         }
//                         //also - if the target cone is empty currently - go ahead and move the driver to the cone
//                         if (!keys.includes(targetConeStr)) {
//                             destination = ("cones/" + targetConeStr)
//                         } else {
//                             destination = ("drivers/" + drivernumber)
//                         }

//                     } else if (keys.includes ("2")) {
//                         targetConeStr = "3";
//                         destination = ("cones/3")
//                         //cone = 3;    
//                     } else if (keys.includes ("1")) {
//                         targetConeStr = "2";
//                         destination = ("cones/2")
//                         //cone = 2;
//                     }
//                 } else {
//                     targetConeStr = "1";
//                     destination = ("cones/1")
//                     //cone = 1;
//                 }

//                 if(window.FileReader) {
//                     var file  = e.target.files[0];
//                     var reader = new FileReader();
//                     if (file && file.type.match('image.*')) {
//                         reader.readAsDataURL(file); //This is a magical spot where the image is converted to a base64 string

//                     } else {

//                     }
//                     reader.onloadend = function (e) {
//                         $("#newimage").attr("src", reader.result);
//                         //the readAsDataURL function puts extra information in the string - slice it off
//                         base64url = reader.result.slice(22);
                        
//                         //place the base64 image into the db and the desired destination and run faceDetect
//                         database.ref(destination).update({
//                             image64: base64url
//                         }).then(faceDetect(base64url)); //the image has been processed - use the Face++ to detect
//                         };
//                 };


//             });
//         });
//     };

//     $(document).on("click", "#uploadbutton", function(){
        
//         $("#fileclick").trigger('click');                 
//             return false;
//     });
//     //The image upload triggers processing
//     $(document).on("change", "#fileclick", readDemoFile);


//     $(document).on("click", "#createFaceSet", function(){
//         event.preventDefault();

//         var newFaceSet = {
//             outer_id: $("#createFaceSet_outer_id").val().trim(),
//             display_name: $("#createFaceSet_display_name").val().trim(),
//         }

//         $.post("/api/face/createFaceSet", newFaceSet)
//             .then(function(data) {
//                 console.log(data);
//         })
//     });
// });

import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Temp extends Component {
  state = {
    create_outer_id: "",
    create_display_name: "",
    faceset_token: ""
  };

  componentDidMount() {
    console.log("TEMP MOUNTED!");
  }

  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res =>
  //       this.setState({ books: res.data, title: "", author: "", synopsis: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });

    console.log(this.state.outer_id)
  };

  handleFormSubmit = event => {
    event.preventDefault();

    API.createFaceSet({
      outer_id: this.state.create_outer_id,
      display_name: this.state.create_display_name
    })
      .then(res => this.state.faceset_token = res.data.faceset_token)

    // if (this.state.title && this.state.author) {
    //   API.saveBook({
    //     title: this.state.title,
    //     author: this.state.author,
    //     synopsis: this.state.synopsis
    //   })
    //     .then(res => this.loadBooks())
    //     .catch(err => console.log(err));
    // }
  };

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
                  onClick={this.handleFormSubmit}
                >
                Add FaceSet
              </FormBtn>
              </div>
            </div>
          </Col>
          <Col size="md-4">
            <div className="panel panel-default" style={{height:"250px"}}>
                <div className="panel-heading">
                    <h3 className="panel-title">Get FaceSet</h3>
                </div>
                <div className="panel-body">
                    <button type="submit" className="btn btn-primary" id="getFaceSet">Get FaceSet</button>
                </div>
            </div>
            {this.state.faceset_token ? (
              <h3>FaceSet Token: {this.state.faceset_token}</h3>
            ) : (
              <h3>No FaceSet</h3>
            )}
          </Col>
          <Col size="md-4">
            <div className="panel panel-default" style={{height:"250px"}}>
                <div className="panel-heading">
                    <h3 className="panel-title">Detect Face</h3>
                </div>
                <div className="panel-body">
                  <div className="form-group">
                      <input className="btn btn-primary" id="uploadbutton" type="button" value="Upload Image"></input>
                      <input className="btn btn-success" id="fileclick" type="file" style={{display:"none"}}></input>
                  </div>
                </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="md-4">
            <div className="panel panel-default" style={{height:"250px"}}>
              <div class="panel-heading">
                <h3 class="panel-title">Add Face</h3>
              </div>
              <div class="panel-body">
                <div class="form-group">
                  <input type="text" class="form-control" id="addFace_faceset_token" placeholder="Enter faceset_token"></input>
                  <small class="form-text text-muted">This is the token of the faceset that you created.</small>
                  <br/>
                  <input type="text" class="form-control" id="addFace_face_token" placeholder="Enter face_token"></input>
                  <small class="form-text text-muted">This is the token of the face.</small>
                </div>
                <button type="submit" class="btn btn-primary" id="addFaceSet">Add Face</button>
              </div>
            </div>
          </Col>
          <Col size="md-4">
            <div className="panel panel-default" style={{height:"250px"}}>  
                <div class="panel-heading">
                    <h3 class="panel-title">Search Face</h3>
                </div>
                <div class="panel-body">
                    <div class="form-group">
                        <input type="text" class="form-control" id="search_face_token" placeholder="Enter faceset_token"></input>
                        <small class="form-text text-muted">This is the token of the faceset that you created.</small>
                        <br/>
                        <input type="text" class="form-control" id="addFace_face_token" placeholder="Enter face_token"></input>
                        <small class="form-text text-muted">This is the token of the face.</small>
                    </div>
                    <button type="submit" class="btn btn-primary" id="addFaceSet">Add Face</button>
                </div>
            </div>
          </Col>
        </Row>
      </Container>

      //   <Row>
      //     <Col size="md-6">
      //       <Jumbotron>
      //         <h1>API Test... Temp-Not Intended For Deployment</h1>
      //       </Jumbotron>
      //       <form>
      //         <Input
      //           value={this.state.title}
      //           onChange={this.handleInputChange}
      //           name="title"
      //           placeholder="Title (required)"
      //         />
      //         <Input
      //           value={this.state.author}
      //           onChange={this.handleInputChange}
      //           name="author"
      //           placeholder="Author (required)"
      //         />
      //         <TextArea
      //           value={this.state.synopsis}
      //           onChange={this.handleInputChange}
      //           name="synopsis"
      //           placeholder="Synopsis (Optional)"
      //         />
      //         <FormBtn
      //           disabled={!(this.state.author && this.state.title)}
      //           onClick={this.handleFormSubmit}
      //         >
      //           Submit Book
      //         </FormBtn>
      //       </form>
      //     </Col>
      //   </Row>
      // </Container>
     );
    }
//           <Col size="md-6 sm-12">
//             <Jumbotron>
//               <h1>Books On My List</h1>
//             </Jumbotron>
//             {this.state.books.length ? (
//               <List>
//                 {this.state.books.map(book => (
//                   <ListItem key={book._id}>
//                     <Link to={"/books/" + book._id}>
//                       <strong>
//                         {book.title} by {book.author}
//                       </strong>
//                     </Link>
//                     <DeleteBtn onClick={() => this.deleteBook(book._id)} />
//                   </ListItem>
//                 ))}
//               </List>
//             ) : (
//               <h3>No Results to Display</h3>
//             )}
//           </Col>
//         </Row>
//       </Container>
    
  
}

export default Temp;
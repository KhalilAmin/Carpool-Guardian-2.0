import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn, Upload } from "../../components/Form";
import Modal from "../../components/Modal";
import CardWrapper from "../../components/PatsTempComponents/CardWrapper";
import InfoCard from "../../components/PatsTempComponents/InfoCard";
import ImageCard from "../../components/PatsTempComponents/ImageCard";
import AddCard from "../../components/PatsTempComponents/AddCard"


class Demo extends Component {


    state = {

    };


  componentDidMount() {
    
  }

  loadSchools = () => {
      API.getSchool()
        .then(res => {
            this.setState( {schools: res.data})
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

//   handleCreateFaceSet = event => {
//     event.preventDefault();

//     API.createFaceSet({
//       outer_id: this.state.create_outer_id,
//       display_name: this.state.create_display_name
//     })
//       .then(res => {
//         console.log(res.data);
//         this.setState({ faceset_token: res.data});
//     });
//   };

//   handleAddSchool = event => {
//     event.preventDefault();
    
//     API.createFaceSet({
//         outer_id: this.state.schoolName,
//         display_name: this.state.schoolName
//     })
//     .then(res => {
//         API.addSchool({
//             school_id: this.state.schoolName,
//             schoolName: this.state.schoolName,
//             schoolStreet: this.state.schoolStreet,
//             schoolCity: this.state.schoolCity,
//             schoolCounty: this.state.schoolCounty,
//             schoolState: this.state.schoolState,
//             schoolZip: this.state.schoolZip,
//             schoolPhone: this.state.schoolPhone,
//             schoolGrades: this.state.schoolGrades,
//             schoolImg: this.state.schoolImg,
//             teacherFirstName: this.state.teacherFirstName,
//             teacherLastName: this.state.teacherLastName,
//             teacherEmail: this.state.teacherEmail,
//             teacherPassword: this.state.teacherPassword,
//             teacherSchoolName: this.state.teacherSchoolName,
//             faceSetToken: res.data
//         })
//     })
//   };


    render() {
            return (
                <ImageCard/>

            );
    } 
}

export default Demo;
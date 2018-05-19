import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn, Upload } from "../../components/Form";
import DemoCard from "../../components/PatsTempComponents/DemoCard";


class Demo extends Component {

    render() {
            return (
                <Container>
                    <Row>
                        <Col size="md-4"/>
                        <Col size="md-4">
                            <DemoCard/>
                        </Col>
                        <Col size="md-4"/>
                    </Row>
                </Container>
            );
    } 
}

export default Demo;
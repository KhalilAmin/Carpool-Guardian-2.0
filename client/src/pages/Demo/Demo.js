import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
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
import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import cloudedsky from '../Images/cloudedsky.jpg';

import "../Styles/City2.css";

class City2 extends Component {
  render() {
    return (
      <div className="break">
        <br></br>

        <div className="home1css">
          <br></br>
          <Container>
            <Row>
              <Col>
                {" "}
                <h1 className="head2">New Delhi</h1>
              </Col>

              <Col>
                {" "}
                <h2 className="head2">2:12 pm</h2>
              </Col>
              <Row>
                {" "}
                <Col>
                  {" "}
                  <h2 className="head2">Cloudy</h2>
                </Col>
              </Row>

              <Row>
                <Col>
                  {" "}
                  <h2 className="head2">12°C</h2>
                </Col>
                <br></br>
              </Row>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default City2;

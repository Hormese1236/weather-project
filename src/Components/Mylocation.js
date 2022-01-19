import React, { Component, Fragment } from "react";
import "../Styles/Mylocation.css";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Mylocation extends Component {
  render() {
    return (
      <div id="img">
        <div>
          <br></br>
        </div>
        <Container>
          <Row>
            <Col>
              <h1 className="head">Pithoragarh</h1>
            </Col>
          </Row>
          <Row>
            <div className="cel">
              <h2 className="head" id="cel">
                12°C
              </h2>
              <Col>
                {" "}
                <h3 className="head">Cloudy</h3>
                <h4 className="head">H:12 L:5°</h4>
              </Col>

              <div className="innerbox">
                Rainy Conditions expected around 4:00 PM
              </div>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Mylocation;

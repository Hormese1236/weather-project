import React, { Component } from "react";
import "../Styles/Bnglore.css";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Bluesky from '../Images/Bluesky.jpg';

class Bnglore extends Component {
  render() {
    return (
      <div id="im">
        <div>
          <br></br>
        </div>
        <Container>
          <Row>
            <Col>
              <h1 className="head">Bengaluru</h1>
            </Col>
          </Row>
          <Row>
            <div className="cele">
              <h2 className="head" id="cel">
                12°C
              </h2>
              <Col>
                {" "}
                <h3 className="head">Mostly Sunny</h3>
                <h4 className="head">H:27° L:16°</h4>
              </Col>

              <div className="inner">
                Sunny conditions will continue for the rest of the day
              </div>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Bnglore;
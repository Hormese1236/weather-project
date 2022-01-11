import React, { Component } from 'react';
import './Banglore.css'
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Bluesky from './Bluesky.jpg'
class Banglore extends Component {
    render() {
        return (
            <div className='break'><br></br>
            <div className="home2css">
                <Container>
        <Row>
            <Col></Col>
            <Col></Col>
            <Col>   <h1 className='head2'>Banglore</h1></Col>
            <Col>   <h2 className='head2'>2:12 pm</h2></Col>
            <Row> <Col>   <h2 className='head2'>Mostly sunny</h2></Col></Row>
           
            <Row>
            <Col>   <h2 className='head2'>26°C</h2></Col>
            </Row>

     
        </Row>
        </Container>
            </div>
            </div>
        );
    }
}

export default Banglore;

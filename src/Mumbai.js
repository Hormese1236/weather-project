import React, { Component } from 'react'; 
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import smoke from './smoke.jpg'
import './Mumbai.css'
class Mumbai extends Component {
    render() {
        return (
            <div>
                    <div className='break'><br></br>
           
           <div className='home3css'>

           <Container>
       <Row>
           <Col></Col>
           <Col>   <h1 className='head2'>Mumbai</h1></Col>
           <Col>   <h2 className='head2'>2:12 pm</h2></Col>
         

           <Row> <Col>   <h2 className='head2'>Smoke</h2></Col></Row>
          
           <Row>
           <Col>   <h2 className='head2'>11°C</h2></Col>
           </Row>

    
       </Row>
     
       </Container>
           </div>
           </div>
            </div>
        );
    }
}

export default Mumbai;

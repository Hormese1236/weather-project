import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cloudedsky from './cloudedsky.jpg';

import './Home.css';
class Home extends Component {
    render() {
        return (
            <div classname='white'>
            <div id='homecss'>

        
            <Container>
       <Row>
           <Col></Col>
           <Col>   <h1 className='head2'>My Location</h1></Col>
           <Col>   <h2 className='head2'>Pithoragarh</h2></Col>
         

           <Row> <Col>   <h2 className='head2'>cloudy</h2></Col></Row>
          
           <Row>
           <Col>   <h2 className='head2'>12°C</h2></Col>
           </Row>

    
       </Row>
     
       </Container>
    
   
 </div>
 </div>
    

           
      
        );
    }
}

export default Home;

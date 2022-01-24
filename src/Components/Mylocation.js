import React, { Component, Fragment } from "react";
import "../Styles/Mylocation.css";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsCloudsFill } from "react-icons/bs";
import { GiRaining } from "react-icons/gi";
import { ProgressBar, Button } from 'react-bootstrap';
import { GiSunset } from "react-icons/gi";

class Mylocation extends Component {
  render() {
    const percentage=10
    const percentage3=20
    const percentage4=50
    const color='yellow'
    const ColoredLine = ({ color }) => (
      <hr
        style={{
          color,
          backgroundColor: color,
          height: 1,

        }}
      />
    );

    return (
   
      <div id="img">
        <div>
          <br></br>
        </div>
        <br></br>
        
        <Container>
          <br></br><br></br>
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
<br></br><br></br>
              <div className="innerbox">
                rainy conditions expected rain around 4:00 PM <div></div>
              </div>
            </div>
          </Row>
          <ColoredLine color="white" />
          <Row>
            {/* <Col sm={1}></Col> */}
            {/* <Col sm={}> */}
              {" "}
              <Col sm={1}></Col>
              <Col sm={1}>
              <h3>Now</h3>
            </Col>
         

<Col></Col>
            <Col sm={1}>
              {" "}
              <h4>3 PM</h4>
            </Col>
           
            <Col></Col>
            <Col sm={1}>
              <h4>4 PM</h4>
            </Col>
            <Col></Col>
            <Col sm={1}>
              <h4>5 PM</h4>
            </Col>
            <Col></Col>
            <Col sm={2}>
              <h4>5:24 PM</h4>
            </Col >
            <Col sm={1}></Col>
          </Row>
            <Row>
            <Col>
              <br></br>
            </Col>
          </Row> 
           
          <Row>
      
           <Col sm={1}></Col>
           
        
              <Col sm={1}>
              
         
         
             


              <BsCloudsFill size="3pc"></BsCloudsFill>
         </Col>
       <Col sm={1}></Col>
            <Col sm={1}>
            <BsCloudsFill size="3pc"></BsCloudsFill>
            </Col>
            <Col sm={1}></Col>
            <Col sm={1}>
            <GiRaining size="3pc"></GiRaining>      <h5>80%</h5>
            </Col>
            <Col sm={1}></Col>
            <Col sm={1}>
            <GiRaining size="3pc"></GiRaining>  <h5>70%</h5>
            </Col>
         <Col sm={1}>
         </Col>
           
          
          <Col sm={2}>
            <GiSunset size="3pc"></GiSunset>
            </Col>
           


            </Row>

             {/* <Col sm={2}>
              <BsCloudsFill size="3pc"></BsCloudsFill>
            </Col>

            <Col sm={2}>
              <GiRaining size="3pc"></GiRaining>
              <h5>80%</h5>
            </Col>
            <Col sm={2}>
              <GiRaining size="3pc"></GiRaining>
              <h5>70%</h5>
            </Col>
            <Col sm={2}>
              <GiSunset size="3pc"></GiSunset>
            </Col>
          </Row> */}
          <Row>
            <Col>
              <br></br>
            </Col>
          </Row>
          <Row> 
           <Col sm={1}></Col> 
            <Col sm={1}>
             
             <h3>12°C</h3>
           </Col>
           <Col sm={1}></Col>
            <Col sm={2}>
             <Col sm={1}></Col>
             <h3>11°C</h3>
           </Col>
         
            <Col sm={1}>
             <h3>11°C</h3>
            </Col>
           <Col></Col>
           <Col></Col>
           <Col></Col>
            <Col sm={1}>
              <h3>9°C</h3>
             </Col>
           <Col></Col>
           <Col></Col>
           <Col></Col>
           
           
         <Col sm={1}>
           
           <h3>Sunset</h3>
       </Col>
 <Col sm={2}></Col>
   
        </Row>  
        
       
     
     <br></br><br></br>
   <br></br><br></br><br></br>
 <Fragment>       <div className="innerbox2">
<br></br>
     <h4 className="second"> 10-DAY FORCAST</h4><br></br>

     <div className="line"></div><Container><br></br>
       <Row>
         <Col sm={1}></Col>
         <Col>Today</Col>
         <Col><GiRaining size="3pc"></GiRaining><h5 >100%</h5>  </Col>
         <Col>5°C  </Col>
         5°C 
         <Col sm={2}   className="progressBar">


         <ProgressBar now={percentage} />
      
    </Col>12°C <Col sm={1}></Col>
    </Row>
   
    <Row>
    <ColoredLine color="white" />
         <Col sm={1}></Col>
<Col>Monday</Col>
 


<Col><GiRaining size="3pc"></GiRaining><h5 >60%</h5></Col>
<Col>6°C</Col>

6°C <Col sm={2}   className="progressBar">


<ProgressBar now={percentage3} />
</Col>12°C
<Col sm={1}></Col>


<ColoredLine color="white" />

       </Row>
       <Row>
         <Col sm={1}></Col><Col>Tuesday</Col>
         <Col> <GiSunset size="3pc"></GiSunset></Col>
         <Col>4°C</Col>
         4°C
         <Col sm={2}   className="progressBar">


<ProgressBar now={percentage4} /></Col>14°C  <Col sm={1}></Col></Row>
     </Container>
    
 
 </div></Fragment>

   
 
     
 </Container>
     
    </div>
    
        
    );
  }
}

export default Mylocation;

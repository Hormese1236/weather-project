import React,{Component} from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import cloudedsky from "../Images/cloudedsky.jpg";

import "../Styles/Home.css";

import { render } from "react-dom";
import Banglore from "./Banglore";

const Home= (props)=>{

// const style={
//    backgroundimage: 'url("../Images/Bluesky.jpg")',
//   height: '200px',
//   backgroundsize: 'cover',
//   backgroundrepeat: 'no-repeat',
//   borderradius: "20px",
// }
if(props.className=='banglore'){
console.log("hello")
}
else{
  return(
    
    
  <div  classname="white">
    
  <br></br>
  <div id="homecss">
    <br></br>
    <Container >
      <Row>
        <Col>
          {" "}
          <h1 className="head2">{props.name}</h1>
        </Col>
        <Col>
          {" "}
          <h2 className="head2">{props.city||props.time}</h2>
        </Col>

        <Row>
          {" "}
          <Col>
            {" "}
            <h2 className="head2">{props.climate}</h2>
          </Col>
        </Row>
        <Col>
          <br></br>
        </Col>

        <Col>
          {" "}
          <h2 className="head2">{props.temp}</h2>
        </Col>
      </Row>
    </Container>
  </div>
</div>
  )
}
}
export default Home





//   export default Home
// class Home extends Component{
//   render() {
//     return (
//       <div classname="white">
//         <br></br>
//         <div id="homecss">
//           <br></br>
//           <Container>
//             <Row>
//               <Col>
//                 {" "}
//                 <h1 className="head2">My Location</h1>
//               </Col>
//               <Col>
//                 {" "}
//                 <h2 className="head2">Pithoragarh</h2>
//               </Col>

//               <Row>
//                 {" "}
//                 <Col>
//                   {" "}
//                   <h2 className="head2">cloudy</h2>
//                 </Col>
//               </Row>
//               <Col>
//                 <br></br>
//               </Col>

//               <Col>
//                 {" "}
//                 <h2 className="head2">12??C</h2>
//               </Col>
//             </Row>
//           </Container>
//         </div>
//       </div>
//     );
//   }
// }




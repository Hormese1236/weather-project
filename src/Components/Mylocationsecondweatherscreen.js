import React, { Fragment } from "react";
import "../Styles/Mylocationsecondweatherscreen.css";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsFillSunFill } from "react-icons/bs";
import { ProgressBar, Button } from "react-bootstrap";
import { GiSunset } from "react-icons/gi";
import { WiSunrise } from "react-icons/wi";
import { RiWindyFill } from "react-icons/ri";
import { GiCompass } from "react-icons/gi";
import { FaCloudRain } from "react-icons/fa";
import { FaTemperatureHigh } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { MdOutlineVisibility } from "react-icons/md";
import gauge from "../Images/gauge.png";
const Mylocationsecondweatherscreen = (props) => {
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
    <div className="background">
      <br></br>
      <h1 className="second"> Pithoragarh</h1>
      <br></br>
      <h2 className="second">12°C &nbsp;| &nbsp;Cloudy</h2> <br></br>
      <div className={props.classname}>
        <div className="uvindex">
          <BsFillSunFill size={"3pc"}></BsFillSunFill>&nbsp;UV Index
          <br></br>
          <h1 className="text">{props.num}</h1>
          <h1 className="text2">{props.status}</h1>
          <br></br> <ProgressBar now={props.percentage} />
          <h2>
            <br></br>
            {props.statement}
          </h2>
        </div>

        <div className="uvindex">
          <GiSunset size={"4pc"}></GiSunset> &nbsp;Sunset{" "}
          <h1 className="time">5:24 P:M</h1> <ColoredLine color="white" />
          <WiSunrise size={"8pc"}></WiSunrise>
          <h3>Sunrise 7:04 AM</h3>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="second">
        <div className="uvindex">
          <RiWindyFill size={"3pc"}></RiWindyFill>&nbsp;wind
          <br></br>
          <GiCompass size={"20pc"}></GiCompass>
        </div>

        <div className="uvindex">
          <FaCloudRain size={"4pc"}></FaCloudRain> &nbsp;Rainfall{" "}
          <h1 className="time">
            0 mm <h2>in 24 hour </h2>
          </h1>{" "}
          <br></br>
          <h3>10 mm expected in next 24 hours</h3>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="second">
        <div className="uvindex">
          <FaTemperatureHigh size={"3pc"}></FaTemperatureHigh>&nbsp;Feels Like
          <br></br>
          <br></br>
          <Fragment>
            {" "}
            <h1 id="temp">12°</h1>
          </Fragment>
          <br></br>
          <h2>Similar to the actual temperature</h2>
        </div>

        <div className="uvindex">
          <WiHumidity size={"4pc"}></WiHumidity> &nbsp;Humidity <br></br>
          <br></br>
          <h1 className="time">78% </h1> <br></br>
          <br></br>
          <h3>The dew point is 8° right now</h3>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="second">
        <div className="uvindex">
          <MdOutlineVisibility size={"3pc"}></MdOutlineVisibility>
          &nbsp;Visiblity
          <br></br>
          <br></br>
          <Fragment>
            {" "}
            <h1 id="temp">16 Km</h1>
          </Fragment>
          <br></br>
          <h2>It's perfectly clear right now</h2>
        </div>

        <div className="uvindex">
          <img src={gauge} height={"30px"} /> &nbsp;pressure <br></br>
          <br></br>
          <img classname="imagg" src={gauge} height={"250px"} />
        </div>
      </div>
    </div>
    // dhedhudh
  );
};

export default Mylocationsecondweatherscreen;

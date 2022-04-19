import React, { useState } from "react";
import PropTypes from "prop-types";

function Weekday(props){
  const [displayInfo, setDisplayInfo] = useState(false);
  let toggleState = () =>{
    (displayInfo === true)? setDisplayInfo(false): setDisplayInfo(true);
  }
  return (
    <React.Fragment>
      {(displayInfo === true)? 
      <h2>{props.location} | {props.hours} | Booth: {props.booth}</h2>: null
      }
      <button onClick={toggleState}>{props.day}</button>
      {console.log(displayInfo)}
    </React.Fragment>
  );
}

Weekday.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default Weekday;
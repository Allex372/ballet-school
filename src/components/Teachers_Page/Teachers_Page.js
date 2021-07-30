import React from "react";
import './teachers.css';
import First_Display_Teachers from "./First_Display_Teachers/First_Display_Teachers";
import Second_Display_Teachers from "./Second_Display_Teachers/Second_Display_Teachers";

function Teachers_Page () {
  return(
      <div className='teachersP-main'>
          <First_Display_Teachers/>
          <Second_Display_Teachers/>
      </div>
  )
}
export default Teachers_Page;

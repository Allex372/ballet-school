import React from "react";
import './Ballet_Class.css';
import First_Display_Classes from "./First_Display_Classes/First_Display_Classes";
import Second_Display_Classes from "./Second_Display_Classes/Second_Display_Classes";
import Third_Display_Classes from './Third_Display_Classes/Third_Display_Classes';
import Fourth_Display_Classes from "./Fourth_Display_Classes/Fourth_Display_Classes";
import Footer_Ballet_Class from "./Footer_Ballet_Class/Footer_Ballet_Class";

function Ballet_Class () {
  return(
      <div className='ballet-main'>
          <First_Display_Classes/>
          <Second_Display_Classes/>
          <Third_Display_Classes/>
          <Fourth_Display_Classes/>
          <Footer_Ballet_Class/>
      </div>
  )
}
export default Ballet_Class;

import React from "react";
import './fd.css';
import Header from "../../../items/header/header";

function First_Display_Classes () {
  return(
      <div className='classes-fd-main'>
          <div className='classes-header'>
              <Header/>
          </div>
          <div className='classes-bg'/>
      </div>
  )
}
export default  First_Display_Classes;

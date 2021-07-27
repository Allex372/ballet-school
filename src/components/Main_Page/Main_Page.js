import React from "react";
import './main_page.css';
import Main_First_Display from "./displays/Main_First_Display/Main_First_Display";
import About from "./displays/About/About";
import Video_Display from "./displays/Video_Display/Video_Display";
import Classes from "./displays/Classes/Classes";
import Photo_Line from "./displays/Photo_Line/Photo_Line";
import Teachers from "./displays/Teachers/Teachers";
import Performances from "./displays/Performances/Performances";


function Main_Page () {
  return(
      <div className='main-flex'>
          <Main_First_Display/>
          <About/>
          <Video_Display/>
          <Classes/>
          <Photo_Line/>
          <Teachers/>
          <Performances/>
      </div>
  )
}

export default Main_Page;

import React from "react";
import './history.css';
import First_Display_History from "./First_Display_History/First_Display_History";
import Second_Display_History from "./Second_Display_History/Second_Display_History";
import Third_Display_History from "./Third_Display_History/Third_Display_History";

function History_Page () {
  return(
      <div className='history-main'>
          <First_Display_History/>
          <Second_Display_History/>
          <Third_Display_History/>
      </div>
  )
}
export default History_Page;

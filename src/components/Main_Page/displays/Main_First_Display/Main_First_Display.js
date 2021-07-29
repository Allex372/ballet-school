import React from "react";
import './fd.css';
import Header from "../../../../items/header/header";


function Main_First_Display () {

    return(

      <div className='main-main'>

          <div className='main-img'>
              <Header/>
              <div className='main-p-div margin-top'>
                  <p className='main-div-p-big'>Black</p>
                  <p className='main-div-p-big margin-left'>Swan</p>
              </div>

              <div className='main-p-div margin-bottom'>
                  <p className='main-div-p-small'>BALLET</p>
                  <p className='main-div-p-small'>SCHOOL</p>
              </div>

          </div>
      </div>
  )
}
export default Main_First_Display;

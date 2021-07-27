import React from "react";
import './photo_line.css';
import img from '../../../../img/main_page/Swan-Lake-2.jpg'

function Photo_Line () {
  return(
      <div className='photoLine-main'>
          <img src={img} alt='img'/>
          <div className='photoLine-wrapper'>
              <p>sing up for a free trial lesson</p>
              <button>Learn more</button>
          </div>
      </div>
  )
}

export default Photo_Line;

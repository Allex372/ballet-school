import React from "react";
import './teachers.css';
import img1 from '../../../../img/main_page/teachers/teacher1.jpg';
import img2 from '../../../../img/main_page/teachers/teacher2.jpg';
import img3 from '../../../../img/main_page/teachers/teacher3.jpg';


function Teachers () {
  return(
      <div className='teachers-main'>
          <div className='classes-top'>
              <hr/>
              <p className='classes-p-absolute'>Teachers</p>
              <p className='classes-p-absolute-opacity'>Teachers</p>
          </div>
          <div className='teachers-bottom'>
              <div className='teachers-bottom-wrapper'>
                  <div className='teachers-img'>
                      <img src={img1} alt='img1'/>
                      <img src={img2} alt='img2'/>
                      <img src={img3} alt='img3'/>
                  </div>
                  <button>Show more</button>
              </div>
          </div>
      </div>
  )
}
export default Teachers;

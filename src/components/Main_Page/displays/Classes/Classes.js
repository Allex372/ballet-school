import React from "react";
import './classes.css';
import img1 from '../../../../img/main_page/classes/ballet.jpg'
import img2 from '../../../../img/main_page/classes/theatre.jpg'
import img3 from '../../../../img/main_page/classes/contemperary.jpg'
import img4 from '../../../../img/main_page/classes/streatching.jpg'


function Classes () {
  return(
      <div className='classes-main'>
          <div className='classes-top'>
              <hr/>
              <p className='classes-p-absolute'>Classes</p>
              <p className='classes-p-absolute-opacity'>Classes</p>
          </div>
          <div className='classes-img-wrapper'>
              <div className='classes-wrapper'>
                  <div className='classes-img'>
                      <img src={img1} alt='ballet'/>
                      <p className='classes-img-p'>Ballet Class</p>
                  </div>
                  <div className='classes-img classes-margin-top'>
                      <p className='classes-img-p'>Theatre Dance Class</p>
                      <img src={img2} alt='theatre class'/>
                  </div>
                  <div className='classes-img'>
                      <img src={img3} alt='Contemporary class'/>
                      <p className='classes-img-p'>Contemporary Class</p>
                  </div>
                  <div className='classes-img classes-margin-top'>
                      <p className='classes-img-p'>Stretching Class</p>
                      <img src={img4} alt='Stretching class'/>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Classes;

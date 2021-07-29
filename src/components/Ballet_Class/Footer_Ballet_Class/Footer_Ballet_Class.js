import React from "react";
import './footer.css';
import img from '../../../img/ballet_class/footer_img.jpg';

function Footer_Ballet_Class () {
  return(
      <div className='footer-class-main'>
          <img src={img} alt='background'/>
          <div className='footer-class-wrapper'>
              <p>apply for audition</p>
              <div className='footer-class-form'>
                  <input type='text' defaultValue='Name'/>
                  <input type='text' defaultValue='Phone number' style={{marginLeft:'3px'}}/>
                  <button>Send</button>
              </div>

          </div>
      </div>
  )
}

export default Footer_Ballet_Class;

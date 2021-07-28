import React, {useState} from "react";
import './footer.css';

import img from '../../../../img/main_page/png-transparent-modern-ballet-dancer-contemporary-dance-classical-ballet-contemporary-ballet-2018-performing-arts-event.png';

function Footer () {

    const [state, setState] = useState();


    function setInfo(e) {
        const email = e.target.value;
        setState(email);
    }

    function showEmail() {
        console.log(state)
    }

    return(
      <div className='footer-main'>
          <div className='footer-wrapper'>
              <div className='footer-wrapper-left'>
                  <p className='footer-p'>Subscribe to the newsletter</p>
                  <div className='footer-form'>
                      <input type='text' defaultValue='E-mail' onInput={setInfo}/>
                      <button onClick={showEmail}>Subscribe</button>
                  </div>
                  <p className='footer-p'>White Lodge, Richmond Park, Richmond, Surrey <br/> TW10 5HR, UK</p>
                  <p className='footer-p'>+44 (0)20 8390 8440</p>
              </div>
              <div className='footer-wrapper-right'>
                  <img src={img} alt='ballerina'/>
              </div>
          </div>
          <p className='footer-p-big'>black swan</p>
      </div>
  )
}

export default Footer;

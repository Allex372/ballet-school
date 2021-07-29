import React, {useState} from "react";
import './footer.css';
import img from '../../../img/ballet_class/footer_img.jpg';

function Footer_Ballet_Class () {

    const [data, setData] = useState({
        name:'',
        phone:''
    })

    function saveDataName(e) {
        const name = e.target.value;
        setData(prevState => ({
            ...prevState,
            name: name
        }))
    }

    function saveDataPhone(e) {
        const phone = e.target.value;
        setData(prevState => ({
            ...prevState,
            phone: phone
        }))
    }

    function sendData() {
        console.log(data)
    }



    return(
      <div className='footer-class-main'>
          <img src={img} alt='background'/>
          <div className='footer-class-wrapper'>
              <p>apply for audition</p>
              <div className='footer-class-form'>
                  <input type='text' defaultValue='Name' onInput={saveDataName}/>
                  <input type='text' defaultValue='Phone number' onInput={saveDataPhone} style={{marginLeft:'3px'}}/>
                  <button onClick={sendData}>Send</button>
              </div>

          </div>
      </div>
  )
}

export default Footer_Ballet_Class;

import React, {useState} from "react";
import './fd.css';
import Lines from '../../../../img/main_page/burgerMenu/line.png';
import Cross from '../../../../img/main_page/burgerMenu/cross.png';
import history from '../../../../img/main_page/burgerMenu/history.png';
import couple from '../../../../img/main_page/burgerMenu/couple.png';
import team from '../../../../img/main_page/burgerMenu/team.png';
import {Link} from "react-router-dom";


function Main_First_Display () {

    let [data, setData] = useState(false)

    let cross = false;


    function changeCross() {
        data = !data;
        setData(data)
    }

    return(

      <div className='main-main'>

          <div className='main-img'>

              <div className='header'>
                  <div className='header-left'>
                      <a href='https://www.instagram.com/ollekssandr/' target="_blank">Facebook</a>
                      <a href='https://www.instagram.com/ollekssandr/' target="_blank">Instagram</a>
                      <a href='https://www.instagram.com/ollekssandr/' target="_blank">Twitter</a>
                  </div>
                  <div className='header-right' onClick={changeCross}>
                      <img src={Cross} alt='cross' style={data?{display:'block'}:{display:'none'}}/>
                      <img src={Lines} alt='lines' style={data?{display:'none'}:{display:'block'}}/>
                  </div>
              </div>

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

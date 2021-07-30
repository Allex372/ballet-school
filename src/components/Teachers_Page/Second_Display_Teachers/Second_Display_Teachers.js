import React from "react";
import './sd.css';
import img1 from '../../../img/teachers/1.jpg';


import {teachersCard} from '../../../items/teachers-card/teachers-card';
import {Link} from "react-router-dom";

function Second_Display_Teachers () {

    return(
      <div className='sd-teachers'>
          <div className='sd-teachers-wrapper'>
              <div className='sd-teachers-row'>
                  {
                      teachersCard.slice(0,3).map(value =>
                          <Link to={`/teachers/${value.id}`} key={value.id}><img src={value.img} key={value.id}/></Link>
                      )
                  }
              </div>
              <div className='sd-teachers-row' style={{marginTop:'20px'}}>
                  {
                      teachersCard.slice(3,6).map(value =>
                          <Link to={`/teachers/${value.id}`} key={value.id}><img src={value.img} key={value.id}/></Link>
                      )
                  }
              </div>
              <div className='sd-teachers-row' style={{marginTop:'20px', marginBottom:'100px'}}>
                  {
                      teachersCard.slice(6,9).map(value =>
                          <Link to={`/teachers/${value.id}`} key={value.id}><img src={value.img} key={value.id}/></Link>
                      )
                  }
              </div>
          </div>
      </div>
  )
}

export default Second_Display_Teachers;

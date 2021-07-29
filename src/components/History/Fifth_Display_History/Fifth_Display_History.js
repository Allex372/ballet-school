import React from "react";
import './fd.css';

import img from '../../../img/history_page/people2.jpg';

function Fifth_Display_History () {
  return(
      <div className='fifth-h-main'>
          <div className='fifth-h-wrapper'>
              <p className='fifth-p-absolute'>2003</p>
              <div className='fifth-p'>
                  <div className='fifth-p-wrapper'>
                      <p className='fifth-p-wrapper-style-big'>Move to Floral Street</p>
                      <p className='fifth-p-wrapper-style-small'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi eum ex, impedit ipsam nam perferendis soluta veritatis! Accusamus ad architecto, asperiores debitis deserunt dolorum, est in laudantium maiores molestiae, nobis praesentium provident quae qui quia repellendus ullam veritatis voluptatem. A architecto hic iusto laudantium neque possimus repudiandae sunt, vero voluptatem!</p>
                      <p className='fifth-p-wrapper-style-small'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto at atque consectetur deserunt dicta distinctio dolores enim est et eveniet expedita facere facilis in iste labore laboriosam magni, modi natus necessitatibus nulla numquam officia perferendis quae quas quasi qui quisquam quod repellendus saepe sint sunt suscipit unde velit vero!</p>
                  </div>
              </div>
              <img src={img} alt='lady'/>

          </div>
      </div>
  )
}
export default Fifth_Display_History;

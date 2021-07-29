import React from "react";
import './sd.css';

import img from '../../../img/history_page/lady.jpg'

function Second_Display_History () {
  return(
      <div className='sd-h-main'>
          <div className='sd-h-wrapper'>
              <img src={img} alt='lady'/>
              <p className='sd-p-absolute'>1926</p>
              <div className='sd-p'>
                  <div className='sd-p-wrapper'>
                      <p className='sd-p-wrapper-style-big'>Founding of the School</p>
                      <p className='sd-p-wrapper-style-small'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi eum ex, impedit ipsam nam perferendis soluta veritatis! Accusamus ad architecto, asperiores debitis deserunt dolorum, est in laudantium maiores molestiae, nobis praesentium provident quae qui quia repellendus ullam veritatis voluptatem. A architecto hic iusto laudantium neque possimus repudiandae sunt, vero voluptatem!</p>
                      <p className='sd-p-wrapper-style-small'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto at atque consectetur deserunt dicta distinctio dolores enim est et eveniet expedita facere facilis in iste labore laboriosam magni, modi natus necessitatibus nulla numquam officia perferendis quae quas quasi qui quisquam quod repellendus saepe sint sunt suscipit unde velit vero!</p>
                  </div>
              </div>
          </div>
      </div>
  )
}
export default Second_Display_History;

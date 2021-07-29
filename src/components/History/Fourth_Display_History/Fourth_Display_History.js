import React from "react";
import './fd.css';
import img from "../../../img/history_page/couch.jpg";

function Fourth_Display_History () {
  return(
      <div className='four-h-main'>
          <div className='four-h-wrapper'>
              <img src={img} alt='lady'/>
              <p className='four-p-absolute'>1990</p>
              <div className='four-p'>
                  <div className='four-p-wrapper'>
                      <p className='four-p-wrapper-style-big'>A Roval Charter</p>
                      <p className='four-p-wrapper-style-small'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi eum ex, impedit ipsam nam perferendis soluta veritatis! Accusamus ad architecto, asperiores debitis deserunt dolorum, est in laudantium maiores molestiae, nobis praesentium provident quae qui quia repellendus ullam veritatis voluptatem. A architecto hic iusto laudantium neque possimus repudiandae sunt, vero voluptatem!</p>
                      <p className='four-p-wrapper-style-small'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto at atque consectetur deserunt dicta distinctio dolores enim est et eveniet expedita facere facilis in iste labore laboriosam magni, modi natus necessitatibus nulla numquam officia perferendis quae quas quasi qui quisquam quod repellendus saepe sint sunt suscipit unde velit vero!</p>
                  </div>
              </div>
          </div>
      </div>
  )
}
export default Fourth_Display_History;

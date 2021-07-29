import React from "react";
import './td.css';
import img from "../../../img/history_page/people.jpg";

function Third_Display_History () {
  return(
      <div className='td-h-main'>
          <div className='td-h-wrapper'>
              <p className='td-p-absolute'>1946</p>
              <div className='td-p'>
                  <div className='td-p-wrapper'>
                      <p className='td-p-wrapper-style-big'>Move to Covent Garden</p>
                      <p className='td-p-wrapper-style-small'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi eum ex, impedit ipsam nam perferendis soluta veritatis! Accusamus ad architecto, asperiores debitis deserunt dolorum, est in laudantium maiores molestiae, nobis praesentium provident quae qui quia repellendus ullam veritatis voluptatem. A architecto hic iusto laudantium neque possimus repudiandae sunt, vero voluptatem!</p>
                      <p className='td-p-wrapper-style-small'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto at atque consectetur deserunt dicta distinctio dolores enim est et eveniet expedita facere facilis in iste labore laboriosam magni, modi natus necessitatibus nulla numquam officia perferendis quae quas quasi qui quisquam quod repellendus saepe sint sunt suscipit unde velit vero!</p>
                  </div>
              </div>
              <img src={img} alt='lady'/>

          </div>
      </div>
  )
}
export default Third_Display_History;

import React from "react";
import './fd.css';
import img from '../../../img/ballet_class/class.jpg';

function Fourth_Display_Classes() {
    return (
        <div className='fd-classes-main'>
            <div className='fd-classes-wrapper'>
                <div className='fd-classes-p-wrapper'>
                    <p className='fd-classes-p-big'>Dance education</p>
                    <p className='fd-classes-p-small'> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Accusantium amet cum cupiditate, eaque esse explicabo in laboriosam maiores mollitia nihil non
                        officiis, perferendis ratione, saepe ullam veniam veritatis. Aliquam asperiores aspernatur
                        consequuntur corporis cumque dicta eum eveniet, ex harum iure molestias nesciunt odit quam
                        quisquam rem, soluta suscipit tempore ut!</p>
                </div>
                <img src={img} alt='class'/>
            </div>
        </div>
    )
}

export default Fourth_Display_Classes;

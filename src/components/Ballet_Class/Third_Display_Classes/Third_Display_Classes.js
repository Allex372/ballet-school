import React from "react";
import './td.css';
import img from '../../../img/ballet_class/sd_img.jpg'

function Third_Display_Classes() {
    return (
        <div className='td-classes-main'>
            <div className='td-classes-wrapper'>
                <img src={img} alt='girl'/>
                <div className='td-classes-flex'>
                    <p className='sd-classes-p-big'>Areas of Teaching</p>
                    <div className='sd-classes-lists'>
                        <ul>
                            <li>classical</li>
                            <li>pas de deux</li>
                            <li>pointe work</li>
                            <li>character</li>
                        </ul>
                        <ul>
                            <li>contemporary</li>
                            <li>gymnastics</li>
                            <li>folk dances</li>
                            <li>choreographics</li>
                        </ul>
                    </div>
                    <p className='td-classes-p first'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,
                        magni saepe? Consectetur dicta eos
                        excepturi fugiat quas sint vero voluptatem.</p>
                    <p className='td-classes-p second-p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,
                        magni saepe? Consectetur dicta eos
                        excepturi fugiat quas sint vero voluptatem.</p>
                    <p className='td-classes-p second-p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                        aliquam at atque consequuntur
                        corporis eius eligendi harum iure modi odit officiis, pariatur perferendis possimus quam,
                        repellendus veritatis vero! Aut, magnam.</p>
                </div>
            </div>
        </div>
    )
}

export default Third_Display_Classes;

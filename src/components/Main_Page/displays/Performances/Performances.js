import React from "react";
import './performances.css';
import img from '../../../../img/main_page/performance/img.jpg';


function Performances() {
    return (
        <div className='performance-main'>
            <div className='classes-top'>
                <hr className='hr'/>
                <p className='performance-p-absolute'>Performances</p>
                <p className='performance-p-absolute-opacity'>Performances</p>
            </div>
            <div className='performance-bottom'>
                <div className='performance-bottom-wrapper'>
                    <p className='performance-bottom-wrapper-p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda consequatur doloremque
                        ducimus earum est iste magnam nam nihil, nisi, nostrum obcaecati omnis quaerat quos repellat
                        repellendus, rerum temporibus veritatis?</p>
                    <div className='performance-wrapper-bottom'>
                        <img src={img} alt='img'/>
                        <div className='performance-table'>
                            <div className='performance-table-title'>
                                <p className='performance-table-title-p'>Date & Time</p>
                                <p className='performance-table-title-p second'>Location</p>
                                <p className='performance-table-title-p third'>Students</p>
                            </div>
                            <hr className='performance-hr'/>
                            <div className='performance-table-info'>
                                <p className='performance-table-info-p'>14 June, 7pm </p>
                                <p className='performance-table-info-p'>Opera Holland Park</p>
                                <p className='performance-table-info-p'>Predominantly Upper School students</p>
                            </div>
                            <hr className='performance-hr'/>
                            <div className='performance-table-info'>
                                <p className='performance-table-info-p'>18 June, 7pm </p>
                                <p className='performance-table-info-p'>Opera Holland Park</p>
                                <p className='performance-table-info-p'>Predominantly Upper School students</p>
                            </div>
                            <hr className='performance-hr'/>
                            <div className='performance-table-info'>
                                <p className='performance-table-info-p'>17 June, 2pm</p>
                                <p className='performance-table-info-p'>Opera Holland Park</p>
                                <p className='performance-table-info-p'>Predominantly Upper School students</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Performances;

import React from "react";
import './fd.css';
import Header from "../../../items/header/header";

function First_Display_History() {
    return (
        <div className='hs-fd-main'>
            <div className='hs-fd-header'>
                <Header/>
            </div>
            <div className='hs-fd-wrapper'>
                <p className='hs-fd-p'>History</p>
            </div>
        </div>
    )
}

export default First_Display_History;

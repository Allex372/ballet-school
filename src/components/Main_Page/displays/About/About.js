import React from "react";
import './about.css';

function About() {
    return (
        <div className='about-main'>
            <div className='about-left'>
                <p>BS</p>
            </div>

            <div className='about-right'>
                <div className='about-wrapper'>
                    <p className='about-p-big'>About</p>
                    <p className='about-p-small'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequatur cum cupiditate
                        doloribus expedita explicabo hic, ipsa minus nostrum nulla obcaecati odio optio perspiciatis
                        provident recusandae ullam unde ut vitae.</p>
                    <p className='about-p-small about-margin'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequatur cum cupiditate
                        doloribus expedita explicabo hic, ipsa minus nostrum nulla obcaecati odio optio perspiciatis
                        provident recusandae ullam unde ut vitae.</p>
                    <button>Join school</button>
                </div>
            </div>
        </div>
    )
}

export default About;

import React from "react";
import './sd.css';
import img from '../../../img/ballet_class/fd_img.jpg';


function Second_Display_Classes() {
    return (
        <div className='sd-classes-main'>
            <div className='sd-classes-wrapper'>
                <p className='sd-classes-p-big'>Your first step on the path<br/>to a career as a classical ballet
                    dancer.</p>
                <div className='sd-classes-flex'>
                    <div className='sd-classes-flex-p'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem dicta dolor facere
                            fuga illum incidunt, iste maiores nesciunt qui reiciendis reprehenderit sint soluta tempore
                            voluptates? Aut corporis doloribus dolorum fuga ipsum nemo quasi saepe voluptate. Expedita
                            labore temporibus vel.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem dicta dolor facere
                            fuga illum incidunt, iste maiores nesciunt qui reiciendis reprehenderit sint soluta tempore
                            voluptates? Aut corporis doloribus dolorum fuga ipsum nemo quasi saepe voluptate. Expedita
                            labore temporibus vel.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem dicta dolor facere
                            fuga illum incidunt, iste maiores nesciunt qui reiciendis reprehenderit sint soluta tempore
                            voluptates? Aut corporis doloribus dolorum fuga ipsum nemo quasi saepe voluptate. Expedita
                            labore temporibus vel.</p>
                    </div>
                    <img src={img} alt='ballerina'/>
                </div>
            </div>
        </div>
    )
}

export default Second_Display_Classes;

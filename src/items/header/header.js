import React, {useState} from "react";
import './header.css';
import Cross from "../../img/main_page/burgerMenu/cross.png";
import Lines from "../../img/main_page/burgerMenu/line.png";
import couple from '../../img/main_page/burgerMenu/couple.png';
import history from '../../img/main_page/burgerMenu/history.png';
import team from '../../img/main_page/burgerMenu/team.png';
import {Link} from "react-router-dom";


function Header() {

    let [data, setData] = useState(false)

    function changeCross() {
        data = !data;
        setData(data)
    }

    return (
        <div className='header'>
            <div className='header-left'>
                <a href='https://www.instagram.com/ollekssandr/' target="_blank" rel="noreferrer">Facebook</a>
                <a href='https://www.instagram.com/ollekssandr/' target="_blank" rel="noreferrer">Instagram</a>
                <a href='https://www.instagram.com/ollekssandr/' target="_blank" rel="noreferrer">Twitter</a>
            </div>
            <div className='header-right'>
                <img src={Cross} alt='cross' className='header-btn' onClick={changeCross}
                     style={data ? {display: 'block'} : {display: 'none'}}/>
                <img src={Lines} alt='lines' className='header-btn' onClick={changeCross}
                     style={data ? {display: 'none'} : {display: 'block'}}/>
                <Link to='/home'>
                    <img src={couple} alt='route-home' className='header-route' id='link1'
                         style={data ? {display: 'block'} : {display: 'none'}}/>
                </Link>
                <Link to='/#'>
                    <img src={couple} alt='route-couple' className='header-route' id='link2'
                                   style={data ? {display: 'block'} : {display: 'none'}}/>
                </Link>
                <Link to='/history'>
                    <img src={history} alt='route-history' className='header-route' id='link3'
                                         style={data ? {display: 'block'} : {display: 'none'}}/>
                </Link>
                <Link to='/teachers'>
                    <img src={team} alt='route-team' className='header-route' id='link4'
                                          style={data ? {display: 'block'} : {display: 'none'}}/>
                </Link>
            </div>
        </div>
    )
}

export default Header;

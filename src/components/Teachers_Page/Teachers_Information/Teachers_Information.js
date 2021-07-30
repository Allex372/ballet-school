import React, {useEffect, useState} from "react";
import './teachers_inf.css';
import {teachersCard} from '../../../items/teachers-card/teachers-card';


function Teachers_Information (data) {

    const [id, setId] = useState();
    const [user, setUser] = useState({});

    useEffect(() => {
        setId(data.match.params.id)
        teachersCard.map(value => {
            if (value.id == id){
                setUser(value)
            }
        })
    })

  return(
      <div className='teacher-main'>
          <div className='teacher-wrapper'>
              <div className='teacher-flex'>
                  <img src={user.img}/>
                  <div className='teacher-flex-text'>
                      <p className='teacher-flex-title'>{user.name}</p>
                      <div className='teacher-flex-text-wrapper'>
                          <div/>
                          <p className='teacher-flex-profession'>{user.profession}</p>
                      </div>
                      <p className='teacher-flex-description'>{user.description}</p>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Teachers_Information;

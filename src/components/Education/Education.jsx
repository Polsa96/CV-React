import React from 'react';
import "./Education.css";

function Education({education}) {
  return (
    <div className="education">
        <h3>Formación</h3>
        {education.map((me)=>(
            <div className="education--div" key={me.date}>
                <h5>{me.name}</h5>
                <p>{me.date}</p>
                <p>{me.where}</p>
            </div>
        ))}
        
    
    </div>
  )
}

export default Education
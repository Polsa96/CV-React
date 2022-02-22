import React from 'react';
import "./Experience.css";

function Experience({experience}) {
    return (
        <div className="experience">
            <h3>Experiencia</h3>
            {experience.map((me)=>(
                <div className="experience--div" key={me.date}>
                    <h5>{me.name}</h5>
                    <div>
                        <p>{me.date} / <span>{me.where}</span></p>
                    </div>
                    <p>{me.description}</p>
                </div>
            ))}
            
        
        </div>
      )
}

export default Experience
import React from 'react';
import "./More.css"

function More({languages, habilities}) {
  return (
    <div className="more">
        <div className="more--languages">
        <h3>Lenguas</h3>
        {languages.map((me)=>(
            <div className="more--languages--div" key={me.date}>
                <h5>{me.language}:</h5>
                <p>{me.level}</p>
            </div>
        ))}
        
    
        </div>  
        <div className="more--habilities">
            <h3>Habilidades</h3>
            <div>
                <h5>Programas de Desarrollo</h5>
                {habilities[0].map((me)=>(
                    <div className="more--habilities--div" key={me}>
                        <p>{me}</p> 
                    </div>
                ))}
            </div>
            <div>
                <h5>Programas de Dibujo</h5>
                {habilities[1].map((me)=>(
                    <div className="more--habilities--div" key={me}>
                        <p>{me}</p> 
                    </div>
                ))}
            </div>
            <div>
                <h5>Otros conocimientos</h5>
                <div className="more--habilities--div">
                    <p>{habilities[2]}</p> 
                </div>
            </div>
            <div>
                <h5>Cualidades</h5>
                <div className="more--habilities--div">
                    <p>{habilities[3]}</p> 
                    <p>{habilities[4]}</p> 
                    <p>{habilities[5]}</p> 
                </div>
            </div>
            
        
        </div>
    </div>
  )
}

export default More
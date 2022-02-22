import React from 'react';
import "./Hero.css";

function Hero({hero}) {
  return (
    <div className="hero">
        <h1 className="hero--name">{hero.name}</h1>
        <div className="hero--info">
            <p className="hero--info--address">{hero.city}, {hero.province} ({hero.country})</p>
            <p className="hero--info--birth">{hero.birthDate}</p>
        </div>
        
        <p className="hero--email"><span>e-mail:</span> {hero.email}</p>
    </div>
  )
}

export default Hero
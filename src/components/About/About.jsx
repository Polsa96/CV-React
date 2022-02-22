import React from 'react'

function About({hero}) {
  return (
    <div>
        <h3>Sobre mí</h3>
        <p>{hero.aboutMe[0].info}</p>
        <p>{hero.aboutMe[1].info}</p>
        <p>{hero.aboutMe[2].info}</p>
    </div>
  )
}

export default About
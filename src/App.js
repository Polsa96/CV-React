import {useState} from "react";
import './App.css';
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import More from "./components/More/More";
import {cv} from "./CV/cv";

const {hero, education, experience, languages, habilities} = cv;


function App() {
  return (
    <div className="app">
      <Hero hero={hero}/>
      <About hero={hero}/>
      <Education education={education}/>
      <Experience experience={experience}/>
      <More languages={languages} habilities={habilities}/>
     
    </div>
  );
}

export default App;

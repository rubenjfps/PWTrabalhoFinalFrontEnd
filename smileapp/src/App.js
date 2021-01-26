import './App.css';
import React, { useState } from "react";
import logo from './resources/logo.svg';
import arrow from './resources/arrow.svg';
import JokeCard from './components/jokecard';

function App() {
  
  const getJoke = () =>{
    fetch("https://official-joke-api.appspot.com/random_joke").then(
      (response) => response.json())
      .then((data)=>{
        setjoke({
          setup:data.setup,
          punchline:data.punchline
        });
      }
      )
  }


  const [joke, setjoke] = useState({
    setup:"hey gunny",
    punchline:"ahaha"
  });





  return (
    <div className="covid">
      <div className="logo">
        <img src={logo}></img>
      </div>
      <div className="go-to-trends">
        <a href="">go to trend  <img className="arrow" src={arrow}></img></a>
      </div>
      <JokeCard setup={joke.setup} punchline={joke.punchline}></JokeCard>
      <button onClick={getJoke} className="make-me-laught">Make me laught</button>
    </div>
  );
}

export default App;

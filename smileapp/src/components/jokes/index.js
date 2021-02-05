import React, { useState, useEffect } from "react";
import JokeCard from '../jokecard';
import arrow from '../../resources/arrow.svg';

import { Link } from 'react-router-dom';
import './jokes.css'

export default function Jokes() {

    
     useEffect(() =>{
        getJoke();
    },[]);
    

    const getJoke = () =>{
        fetch("https://official-joke-api.appspot.com/random_joke").then(
          (response) => response.json())
          .then((data)=>{
              console.log(data)
            setjoke({
              setup:data.setup,
              punchline:data.punchline,
              id:data.id
            });
          }
          )


      }
    
      const [joke, setjoke] = useState({
        setup:"",
        punchline:""
      });
    
    return (
        
        <div className="jokes">
            <div className="go-to-trends">
                <Link to ="/trends">
                <a>go to trend  <img className="arrow" src={arrow}></img></a>
                </Link>
            </div>
            <JokeCard called={"jokes"} id={joke.id} setup={joke.setup} punchline={joke.punchline}></JokeCard>
            <button onClick={getJoke} className="make-me-laught">Make me laught</button>
        </div>
    )
}

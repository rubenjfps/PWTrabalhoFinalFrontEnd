import React, { useState, useEffect }from 'react'
import { Link } from 'react-router-dom';
import JokeCard from '../jokecard';
import arrow from '../../resources/arrow.svg';

import './trends.css'

export default function Trends() {
    
    function checkLikes(like, id){
        if(like<=0){
            fetch('https://smileapprubensilva.herokuapp.com/jokes/' + id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                console.log(res);
            }).catch(err => err);
            
        }
    }

    const [jokes, setJokes] = useState([]);
    
    useEffect(() =>{
        getJokes();
    });

    const getJokes = () =>{
        fetch("https://smileapprubensilva.herokuapp.com/jokes").then(
          (response) => response.json())
          .then((data)=>{
            console.log(data)
            setJokes(data);
            }
          )
        jokes.map(joke =>(
            checkLikes(joke.likes, joke._id) 
        ))
      }
    
    return (
        <div className="trends">
            <div className="go-to-jokes">
            <Link to ="/jokes">
                <a><img className="trends-arrow" src={arrow}></img> make me laught</a>
            </Link>
            </div>
            {jokes.map(joke => (
                <JokeCard likes={joke.likes} id={joke._id} setup={joke.setup} punchline={joke.punchline}></JokeCard>
            ))}
        </div>
    )
}

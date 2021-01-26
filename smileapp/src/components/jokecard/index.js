import React from 'react'
import './jokeCard.css';
export default function jokeCard(props) {
    return (
        <div className="covid-joke">
            <h1>Random Joke</h1>
            <p>{props.setup}</p>
            <p>{props.punchline}</p>
        </div>
    )
}

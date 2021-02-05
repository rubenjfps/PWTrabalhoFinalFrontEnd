import React, {useEffect} from 'react'
import './jokeCard.css';
import heart from '../../resources/heart.svg';

export default function JokeCard(props) {


   
   function postJoke() {
        const data = {
            id:props.id,
            setup:props.setup,
            punchline:props.punchline
        }

        fetch('https://smileapprubensilva.herokuapp.com/jokes/' ,{
            method: 'POST',
            mode:"cors",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            console.log(res)
        }).catch(err => err);
    }
    

    const likeJoke = () =>{


        if(props.called=="jokes"){
            postJoke();
        }
        else{
            fetch('https://smileapprubensilva.herokuapp.com/jokes/like/' + props.id, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                console.log(res);
            }).catch(err => err);
        }
       

    }


    return (
        <div className="covid-joke">
            <h1>Random Joke</h1>
            <p>{props.setup}</p>
            <p>{props.punchline}</p>
            <div className="likes">
            <p>{props.likes}</p>
            <button onClick={likeJoke} className="button-heart"><img src={heart} alt=""></img></button>
            </div>
        </div>
    )
}

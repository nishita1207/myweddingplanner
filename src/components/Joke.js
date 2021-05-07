import {React, useState} from 'react'
import Button from'./Button'
import DisplayJoke from'./DisplayJoke'


const Joke = () => {



    const [joke, setJoke] = useState([])

    async function jokeData(e) {
        e.preventDefault()
            const data = await fetch( `https://official-joke-api.appspot.com/random_joke`).then((res) => res.json())
            .then((data) => data)
           
            setJoke ({joke: data})
            
        }

    return (
        <div>
           
                <div>
                    <Button color= 'LightPink' text="Click to laugh!" onClick= {e => jokeData(e)}/>
                </div>
            <br/>

            {joke.joke != undefined ? (
                <div>
                <DisplayJoke data={joke.joke} />
                
                </div>
                ) : null}
        </div>
  )

 }
export default Joke

import React from "react";


function JokeImg() {


const ImgJoke = () => {
   

    fetch('https://icanhazdadjoke.com/j/R7UfaahVfFd',
    {headers:{
        'Accept':"application/json",
        'Content-Type': 'application/json'
    }
    })
    .then((res) => res.json())
    .then((json) => console.log(json));

    // <img src="https://icanhazdadjoke.com/j/R7UfaahVfFd.png" />
    
}


    
    
    return (
        
        <button onClick={ImgJoke}>test</button>
    )
}


export default JokeImg
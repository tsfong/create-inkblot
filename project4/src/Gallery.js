import React from "react";
import "./Gallery.css";
import inkblot1 from "./images/inkblot1.jpeg";
import inkblot2 from "./images/inkblot2.jpeg";
import inkblot3 from "./images/inkblot3.jpeg";
import inkblot4 from "./images/inkblot4.jpeg";
import inkblot5 from "./images/inkblot5.jpeg";
import inkblot6 from "./images/inkblot6.jpeg";
import inkblot7 from "./images/inkblot7.jpeg";
import inkblot8 from "./images/inkblot8.jpeg";
import inkblot9 from "./images/inkblot9.jpeg";
import inkblot10 from "./images/inkblot10.jpeg";


const Gallery = () => {
    return (
        <div className = "inkblot_container">
            <h1 className = "gallery-header">Inkblots and Their Interpretations</h1>
        <img className = "inkblot-pics" src={inkblot1} alt="inkblot1" />
        <h2>Card 1:</h2>
        <h4>Bat, Butterfly, Moth</h4>
        <p>When seeing Card I, subjects often inquire on how they should proceed, and questions on what they are allowed to do with the card are not very significant. Being the first card, it can provide clues about how subjects tackle a new and stressful task. It is not, however, a card that is usually difficult for the subject to handle, having readily available popular responses.</p>
        <img className = "inkblot-pics" src={inkblot2} alt="inkblot2" />
        <h2>Card 2:</h2>
        <img className = "inkblot-pics" src={inkblot3} alt="inkblot3" />
        <h2>Card 3:</h2>
        <img className = "inkblot-pics" src={inkblot4} alt="inkblot4" />
        <h2>Card 4:</h2>
        <img className = "inkblot-pics" src={inkblot5} alt="inkblot5" />
        <h2>Card 5:</h2>
        <img className = "inkblot-pics" src={inkblot6} alt="inkblot6" />
        <h2>Card 6:</h2>
        <img className = "inkblot-pics" src={inkblot7} alt="inkblot7" />
        <h2>Card 7:</h2>
        <img className = "inkblot-pics" src={inkblot8} alt="inkblot8" />
        <h2>Card 8:</h2>
        <img className = "inkblot-pics" src={inkblot9} alt="inkblot9" />
        <h2>Card 9:</h2>
        <img className = "inkblot-pics" src={inkblot10} alt="inkblot10" />
        <h2>Card 10:</h2>
        </div>
    )
}

  export default Gallery;



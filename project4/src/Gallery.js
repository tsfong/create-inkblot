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
        <p>How fast you answer is taken as an indication of how well you cope with new situations. The usual reaction is to give one of the most common responses immediately. A bad response is any that says something untoward about the central female figure. "She" is often judged to be a projection of your own self-image.</p>
        <img className = "inkblot-pics" src={inkblot2} alt="inkblot2" />
        <h2>Card 2:</h2>
        <h4>Two Humans, Four-Legged Animal (Dogs, Elephants, Bears)</h4>
        <p>	The red details of Card II are often seen as blood, and are the most distinctive features. Responses to them can provide indications about how a subject is likely to manage feelings of anger or physical harm.</p>
        <img className = "inkblot-pics" src={inkblot3} alt="inkblot3" />
        <h2>Card 3:</h2>
        <h4>Two Humans/Figures</h4>
        <p>	Card III was designed to look like human figures, and measures your approach to other people. If you hesitate on this one, and spend a while trying to figure out what's going on, then some analysts would argue you could be tentative, neurotic, and/or lack awareness in social situations. Three-quarters of people report that the blots look like humans, meaning that if someone doesn't see at least one human figure, this could indicate an unusual response to social interaction.</p>
        <img className = "inkblot-pics" src={inkblot4} alt="inkblot4" />
        <h2>Card 4:</h2>
        <h4>Animal Hide/Rug, Shoes, Dragon</h4>
        <p>Card IV is designed to test your response to authority. The huge, imposing figure, which seems to hover over the viewer — is most often described as an animal hide and/or a rug — and represents authoritative figures: your parents, the government, your boss, you name it. This one demonstrates your feelings towards authority. Your response indicates how you feel about the ruling presence in your life.</p>
        <img className = "inkblot-pics" src={inkblot5} alt="inkblot5" />
        <h2>Card 5:</h2>
        <h4>Bat, Butterfly, Moth</h4>
        <p>Card V is meant to be an easier card to perceive and not usually seen as threatening. Rorschach himself thought this was the easiest blot to interpret. It is a bat or a butterfly, period. You don't want to mention anything else. After the few challenging cards, this one usually gets a good response from the viewer. However, schizophrenics occasionally see moving people in this image. Seeing crocodile heads on the ends of the bat's wings indicates hostility. </p>
        <img className = "inkblot-pics" src={inkblot6} alt="inkblot6" />
        <h2>Card 6:</h2>
        <h4>Animal Hide, Boat, Submarine, Men with Long Noses</h4>
        <p>Card VI is dominated by its texture and elicits association related to interpersonal closeness; it is a "sexual card." The textures are light and feathery at the top and depending on how you turn the image, you can see different layouts of shapes and figures. This card is meant to see how viewers react to attachment and physical closeness.</p>
        <img className = "inkblot-pics" src={inkblot7} alt="inkblot7" />
        <h2>Card 7:</h2>
        <h4>Human Heads/Faces, Women or Children</h4>
        <p>Card VII can be associated with femininity and functions as a "mother card", where difficulties in responding may be related to concerns with the female figures in the subject's life. Deprecating descriptions of the figures such as "witches," "gossips," or "girls fighting," indicate poor maternal relations. There is an entirely different side to this blot, but you're not supposed to see it. The white space between the girls or women can be interpreted as an oil lamp or similar object. It is claimed that only schizophrenics usually see the lamp.</p>
        <img className = "inkblot-pics" src={inkblot8} alt="inkblot8" />
        <h2>Card 8:</h2>
        <h4>Four-Legged Animals, Lions, Pigs, Bears, Tree, Rib Cage</h4>
        <p>Card VII often is perceived as a positive image, where viewers express relief and respond effectively. It is meant to be a change of pace during the test and introduces new elaborations with colors and complexity. For people who find processing complex situations or emotional stimuli distressing or difficult may be uncomfortable with this card.</p>
        <img className = "inkblot-pics" src={inkblot9} alt="inkblot9" />
        <h2>Card 9:</h2>
        <h4>Fire, Smoke, Women, Anatomy, Flower</h4>
        <p>Card IX is indistinct in form and has diffused, muted chromatic features. This card is meant to be generally vague. If viewers have difficulty processing this card, they may have trouble dealing with unstructured data.</p>
        <img className = "inkblot-pics" src={inkblot10} alt="inkblot10" />
        <h2>Card 10:</h2>
        <h4>Crab, Lobster, Spider, Rabbit Head, Worms</h4>
        <p>Card X is similar to Card VII but has the same uncertainty and complexity of Card IX. It has many shapes with lots of activity and places to see things within the image. This card will test your organizational ability and provides viewers with the opportunity to respond with a comprehensive answer to end the test.</p>
        </div>
    )
}

  export default Gallery;



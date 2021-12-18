import React from "react"
import { useState } from "react";
// import "./App.css";
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


export default function Home() {
    const [toggle, setToggle] = useState("1");
        return (
        <div className="App">
        {inkblots.map(({ title, text, key, img }) => {
          return (
            <>
              <div className="main">
                <div className="text">
                  <h1 onClick={() => setToggle(key)}>{title} </h1>
                  {toggle === key ? (
                    <>
                      <p>{text}</p>
                    </>
                  ) : null}
                </div>
  
                <div className="img">
                  {toggle === key ? (
                    <>
                      <img src={img} key={key} className="photo" />
                    </>
                  ) : null}
                </div>
              
                <div className="form">
                    {toggle === key ? (
                    <>
              <form>
                  <label>
                      Answer:&nbsp;
                      <input type="text" name="answer" />
                  </label>
                  <input type="submit" value="Submit" />
              </form>
              </>
                    ) : null}
          
              </div>
            </div>  
            </>
          );
        })}
      </div>
    );
  }

const inkblots = [
    {
      id: "1",
      key: "1",
      title: "Card 1",
      text: "What do you see?",
      img: "./images/inkblot1.jpeg"
    },
    {
      id: "2",
      key: "2",
      title: "Card 2",
      text: "What do you see?",
      img: "./images/inkblot2.jpeg"
    },
    {
      id: "3",
      key: "3",
      title: "Card 3",
      text: "Text3.",
      img: "./images/inkblot3.jpeg"
    },
    {
      id: "4",
      key: "4",
      title: "Card 4",
      text: "Text4",
      img: "./images/inkblot4.jpeg"
    },
    {
        id: "5",
        key: "5",
        title: "Card 5",
        text: "Text1.",
        img: "./images/inkblot5.jpeg"
      },
      {
        id: "6",
        key: "6",
        title: "Card 6",
        text: "Text2.",
        img: "./images/inkblot6.jpeg"
      },
      {
        id: "7",
        key: "7",
        title: "Card 7",
        text: "Text3.",
        img: "./images/inkblot7.jpeg"
      },
      {
        id: "8",
        key: "8",
        title: "Card 8",
        text: "Text4",
        img: "./images/inkblot8.jpeg"
      },
      {
        id: "9",
        key: "9",
        title: "Card 9",
        text: "Text4",
        img: "./images/inkblot9.jpeg"
      },
      {
        id: "10",
        key: "10",
        title: "Card 10",
        text: "Card 10",
        img: "./images/inkblot10.jpeg"
      },
  ];
  
  





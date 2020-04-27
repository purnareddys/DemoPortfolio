import React from "react";
import "./index.css";
import Header from "./Header";
import Wave from "./Wave";
import Card from "./Card";
import Section from "./Section";
const App = () => {
  return (
    <>
      <Header />
      <div className="Hero">
        <div className="HeroGroup">
          <h1>
            Purna Reddy <br /> A web developer
          </h1>
          <p>Powered by React, VS Code and coffee.</p>
          <a href="mailto:purnareddy.2013@gmail.com">
            <button>Contact Me</button>
          </a>
          <Wave />
        </div>
      </div>
      <div className="Cards">
        <h2>Projects</h2>
        <div className="CardGroup">
          <Card
            url="https://maze-game.purnareddy2013.now.sh/"
            title="Maze Game"
            text="JavaScript"
            image={require("../images/wallpaper.jpg")}
          />
          <Card
            url="https://secretmessage-sharing-app.purnareddy2013.now.sh/"
            title="Message"
            text="Javascript"
            image={require("../images/wallpaper2.jpg")}
          />
          <Card
            url="https://loving-snyder-d656a2.netlify.app/"
            title="Top Players"
            text="React & Redux"
            image={require("../images/wallpaper3.jpg")}
          />
        </div>
      </div>
      <div id="section-link"></div>
      <Section
        image={require("../images/wallpaper2.jpg")}
        logo="/images/logo-react.png"
        title="Purna Reddy"
        text="A Continuous learner with a positive attitude. Interested in Learning New technologies.
        I Believe in the Phrase See what it can be not just what it is. 
        Don't just give up!"
      />
      <div className="footer">
        <p>Developed with ❤ by Purna</p>
      </div>
    </>
  );
};

//cursor
// function cursor(e) {
//   let mouse = document.querySelector(".cursor");
//   mouse.style.top = e.pageY + "px";
//   mouse.style.left = e.pageX + "px";
// }
// window.addEventListener("mousemove", cursor);
export default App;

import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="Card">
      <a href={props.url} rel="noopener noreferrer" target="_blank">
        Test
      </a>
      <img src={props.image} alt="Images" />
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
};

export default Card;

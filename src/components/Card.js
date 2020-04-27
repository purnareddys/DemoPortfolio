import React from "react";
import "./Card.css";

const Card = (props) => (
  <div className="Card">
    <a href={props.url} target="_blank"></a>
    <img src={props.image} />
    <h3>{props.title}</h3>
    <p>{props.text}</p>
  </div>
);

export default Card;

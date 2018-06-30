import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card" style={{width:"200px", height:"200px", padding:"0px"}}>
    <div className="img-container card-body" style={{width:"200px", height:"200px"}}>
      <a href="#" onClick={() => props.handleClick(props.id)}><img alt={props.name} src={props.image} style={{width:"200px", height:"200px"}}/></a>
    </div>    
  </div>
);

export default FriendCard;

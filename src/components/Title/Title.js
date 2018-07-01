import React from "react";
import "./Title.css";

const Title = props => (
<div>
<h1 className="title">{props.children}</h1>
    <h4 className="text-center bot">Click on an image to earn points, but don't click on any more than once!</h4>

</div>
);

export default Title;

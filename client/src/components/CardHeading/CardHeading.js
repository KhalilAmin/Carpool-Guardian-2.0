import React from "react";
import "./CardHeading.css";

const CardHeading = props => {
    return (
        <div className=" card-heading">
            <h2 className="heading"> {props.children} </h2>
        </div>
    )
}

export default CardHeading;
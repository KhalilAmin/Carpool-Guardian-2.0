import React from "react";

const ImageCard = props => {
    console.log(props);
    return (
      <img className="imageCard" alt={props.name} src={props.img} key={props.id} />
    );
 
  }

export default ImageCard;

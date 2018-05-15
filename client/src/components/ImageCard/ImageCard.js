import React from "react";

const ImageCard = props => {

    const personArray = props.personArray;
    const listImages = personArray.map((person) =>
   
    <div className="w3-container w3-center">
      <img alt={person.name} src={person.img} key={person.id} />
    </div>
  );

  // return(<ul>{listImages}</ul>);
  return{listImages};
  }

export default ImageCard;

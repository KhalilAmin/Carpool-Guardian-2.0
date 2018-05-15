import React from "react";

const ImageCard = props => {

    const personArray = props.personArray;
    const listImages = personArray.map((person) =>
    // <li >
      <img alt={person.name} src={person.img} key={person.id} />
    // /* </li> */
  );

  // return(<ul>{listImages}</ul>);
  return{listImages};
  }

export default ImageCard;

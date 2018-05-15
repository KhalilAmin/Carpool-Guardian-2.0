import React from "react";

const stuInfoCard = props => {

  const personArray = props.personArray;
  const list = personArray.map((person) =>
    <li key={person.id}>  </li>
    // <div className="">
    //   <ul>
    //     <li>
    //       <strong>Name:</strong> {person.firstname}{person.lastname}
    //     </li>
    //     <li>
    //       <strong>Occupation:</strong> {props.occupation}
    //     </li>
    //     <li>
    //       <strong>Location:</strong> {props.location}
    //     </li>
    //   </ul>
    // </div>
  );

  return (<ul>{list}</ul>);
}

export default stuInfoCard;
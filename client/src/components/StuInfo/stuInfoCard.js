import React from "react";

const stuInfoCard = props => {

    const personArray = props.personArray;
    const list = personArray.map((person) =>
        // <li key={person.id }>  </li>
        <div className="">
          <ul>
            <li>
              <strong>Name:</strong> {person.firstname}{person.lastname}
            </li>
            <li>
              <strong>Email:</strong> {props.email}
            </li>
            <li>
              <strong>Family:</strong> {props.family}
            </li>
            <li>
              <strong>Phone:</strong> {props.phone}
            </li>
            <li>
              <strong>Teacher:</strong> {props.teacher}
            </li>
          </ul>
        </div>
    );

    return {list};
}

export default stuInfoCard;
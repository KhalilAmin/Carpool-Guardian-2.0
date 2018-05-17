import React from "react";

const CardGuardianInfo = props => {

    const personArray = props.personArray;
    const list = personArray.map((person) =>

        <div key={person.id } className="">
          <ul>
            <li>
              <strong>Name:</strong> {person.fName}{person.lName}
            </li>
            <li>
              <strong>Email:</strong> {props.email}
            </li>
            <li>
              <strong>Phone:</strong> {props.phone}
            </li>
          </ul>
        </div>
    );

    return {list};
}

export default CardGuardianInfo;
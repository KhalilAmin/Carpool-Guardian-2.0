import React from "react";

const InfoCardC = props => {

    return (
        <div className="childInfoCard">
          <ul>
            <li>
              <strong>Name:</strong> {props.fName} {props.lName}
            </li>
            <li>
              <strong>School:</strong> {props.school}
            </li>
            <li>
              <strong>Grade:</strong> {props.grade}
            </li>
            <li>
              <strong>Phone:</strong> {props.phone}
            </li>
            <li>
              <strong>Email:</strong> {props.email}
            </li>
          </ul>
        </div>
    )
}

export default InfoCardC;
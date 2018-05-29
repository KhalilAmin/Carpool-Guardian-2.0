import React from "react";

const InfoCardG = props => {

    return (
        <div className="guardianInfoCard">
          <ul>
            <li>
              <strong>Name:</strong> {props.fName} {props.lName}
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

export default InfoCardG;
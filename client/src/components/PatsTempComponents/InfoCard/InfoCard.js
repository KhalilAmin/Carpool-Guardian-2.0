import React from "react";

const InfoCard = props => {

    return (
        <div className="schoolInfoCard">
          <ul>
            <li>
              <strong>Name:</strong> {props.name}
            </li>
            <li>
              <strong>Address:</strong> {props.street}{props.city}{props.state}
            </li>
            <li>
              <strong>Phone:</strong> {props.phone}
            </li>
            <li>
              <strong>Grades:</strong> {props.grades}
            </li>
          </ul>
        </div>
    )
}

export default InfoCard;
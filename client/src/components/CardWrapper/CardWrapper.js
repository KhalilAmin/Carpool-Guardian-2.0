import React from "react";
import AuthReqProps from './ImageCard/AuthReq-props';
import "./CardWrapper.css"

const CardWrapper = props => {

  return (
    <div className="">

      {
        props.persons.map(person =>
          // for each name there must = model 'name'
          <AuthReqProps name={person.name} image_heading={person.image_heading} image={person.image} />
        )}
    </div>
  );
}
export default CardWrapper;
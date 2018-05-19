import React from "react";

const Dropdown = props => {

    return (


        <select>
            {props.items.map(item => (
                <option value={item}>{item}</option>
            ))}
        </select>
            
        // <div className="dropdown">
        //     <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
        //     <span className="caret"></span></button>
        //     <ul className="dropdown-menu">
        //         {props.items.map(item => (
        //             <li>{item}</li>
        //         ))}
        //     </ul>
        // </div>
    );
 
  }

export default Dropdown;

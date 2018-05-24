import React, { Component } from 'react'
import "./ParentChildCardHeading.css";

class ParentChildCardHeading extends Component {

    render() {
        return (
            //  Changed HTML (JSX) text from 'Carpool Candidate' to 'this.props.cardHeading' variable
            <strong><h1 style={{ margin: 'auto', maxWidth: '83%', backgroundColor: 'tan', textAlign: 'center', marginTop: '30px', fontSize: '50px' }}>~ {this.props.cardHeading} ~</h1></strong>
        )
    }
}

export default ParentChildCardHeading


























// import React from "react";
// import "./TchrCardHeading.css";

// const CardHeading = props => {
//     return (
//         <div className=" card-heading">
//             <h2 className="heading"> {props.children} </h2>
//         </div>
//     )
// }

// export default CardHeading;
import React, { Component } from 'react'
import "./TchrCardHeading.css";

class CardHeader extends Component {

    render() {
        return (
            //  Changed HTML (JSX) text from 'Carpool Candidate' to 'this.props.cardHeading' variable
            <strong><h1 style={{ margin: 'auto', width: '100%', backgroundColor: 'tan', textAlign: 'center', marginTop: '30px', fontSize: '55px' }}>~ {this.props.cardHeading} ~</h1></strong>
        )
    }
}

export default CardHeader


























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
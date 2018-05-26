import React, { Component } from 'react'
import "./TchrCardHeading.css";




class CardHeader extends Component {
    
    state = {
        confidenceClass: "confidenceHeadRed"
    };

    componentDidMount() {
        if (this.props.confidence >= 85) {
            this.setState({confidenceClass: "confidenceHeadGreen"})
        } else if (this.props.confidence >= 60 && this.props.confidence < 85) {
            this.setState({confidenceClass: "confidenceHeadYellow"})
        } else {
            this.setState({confidenceClass: "confidenceHeadRed"})
        }
      }

    render() {
        return (
            //  Changed HTML (JSX) text from 'Carpool Candidate' to 'this.props.cardHeading' variable
            <strong><h1 className={this.state.confidenceClass}>{this.props.confidence}</h1></strong>
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
import React, { Component } from 'react'

class CardHeader extends Component {

  render() {
    return (
      //  Changed HTML (JSX) text from 'Carpool Candidate' to 'this.props.cardHeading' variable
      <strong><h1 style={{ margin: 'auto', width: '90%', backgroundColor: 'tan', textAlign: 'center', marginTop: '30px', fontSize: '55px' }}>~ {this.props.cardHeading} ~</h1></strong>
    )
  }
}

export default CardHeader